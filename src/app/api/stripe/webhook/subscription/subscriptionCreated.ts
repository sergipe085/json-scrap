import Stripe from "stripe";

export async function subscriptionCreated(data: Stripe.Event.Data) {
    console.log(data);
    const subscription = data.object as any;

    console.log(subscription.status);
}