import { getProduct } from "@/data/stripe";
import { getUserSubscription } from "@/data/user";
import { auth, signOut } from "@/lib/auth"

export default async function Dashboard() {

    return (
        <>
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl text-accent-content font-semibold">Dashboard</h1>
        </>
    )
}