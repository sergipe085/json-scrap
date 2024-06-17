import { stripe } from "@/lib/stripe";

export async function getProduct(prodId: string) {
    const subscription = await stripe.products.retrieve(prodId);

    return subscription;
}