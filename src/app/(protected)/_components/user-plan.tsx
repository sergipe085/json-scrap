import { cancelSubscription } from "@/actions/stripe/subscription";
import { getProduct } from "@/data/stripe";
import { getUserSubscription } from "@/data/user";
import { auth } from "@/lib/auth";

export async function UserPlan() {
    const session = await auth();
    const subscription = await getUserSubscription(session?.user.id as string) as any;
    const product = await getProduct(subscription?.plan.product)

    async function handleCancelSubscription() {
        "use server"
        await cancelSubscription(subscription.id);
    }

    return (
        <div className="">
            <h1>Plan: { product.name }</h1>
            <h1>Status: { subscription.status }</h1>
            <button className="btn btn-primary">Switch</button>
            <form action={handleCancelSubscription}>
                <button type="submit" className="btn btn-outline btn-error">Cancel</button>
            </form>
        </div>
    )
}