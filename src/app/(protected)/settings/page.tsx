import { UserPlan } from "../_components/user-plan";
import { getProduct } from "@/data/stripe";
import { getUserSubscription } from "@/data/user";
import { auth, signOut } from "@/lib/auth"

export default async function Dashboard() {
    const session = await auth();
    const subscription = await getUserSubscription(session?.user.id as string) as any;
    const product = await getProduct(subscription?.plan.product)

    return (
        <>
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl text-accent-content font-semibold">Settings</h1>
            <UserPlan/> 
            <form action={async () => {
                "use server"
                await signOut()
            }}>
                <button type="submit">
                    Sign Out
                </button>
            </form>
        </>
    )
}