import Stripe from "stripe";

export async function subscriptionCanceled(data: Stripe.Event.Data) {
    const subscription = data.object as any;

    console.log(subscription.status);
}