import { db } from "@/lib/db";
import Stripe from "stripe";

export async function checkoutCompleted(data: Stripe.Event.Data) {
    const { mode, subscription, customer, metadata: { priceId, userId } } = data.object as any;

    console.log({
        mode,
        subscription,
        customer,
        priceId,
        userId
    })

    await db.user.update({
        where: {
            id: userId
        },
        data: {
            stripePriceId: priceId,
            stripeCustomerId: customer,
            stripeSubscriptionId: subscription
        }
    })
}