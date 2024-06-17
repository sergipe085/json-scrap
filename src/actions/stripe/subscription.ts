import { stripe } from "@/lib/stripe";

export async function cancelSubscription(subId: string) {
    const subscription = await stripe.subscriptions.cancel(subId);

    return subscription;
}

export async function getSubscription(subId: string) {
    const subscription = await stripe.subscriptions.retrieve(subId);

    return subscription;
}