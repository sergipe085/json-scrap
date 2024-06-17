import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { Session } from "next-auth";
import { getSubscription } from "./subscription";

type Req = {
    priceId: string;
    session: Session;
}

export async function createCheckout({ priceId, session }: Req) {
    const user = await db.user.findUnique({
        where: {
            id: session.user.id
        }
    })

    if (!user) {
        return null;
    }

    var currentSubscription = user.stripeSubscriptionId ? await getSubscription(user.stripeSubscriptionId) : null;

    if (currentSubscription?.status == "active") {
        // user already have an active subscription
        throw new Error("You already have an active subscription.");
    }

    const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1
          }
        ],
        customer: user?.stripeCustomerId ?? undefined,
        mode: 'subscription',
        success_url: `${process.env.NEXTAUTH_URL}/dashboard`,
        cancel_url: `${process.env.NEXTAUTH_URL}/`,
        metadata: {
          userId: session?.user.id,
          priceId
        }
    });

    return checkoutSession;
}