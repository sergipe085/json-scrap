import { getSubscription } from "@/actions/stripe/subscription";
import { db } from "@/lib/db";

export async function getUserById(id: string) {
    const user = await db.user.findUnique({
        where: {
            id
        }
    })

    return user;
}

export async function getUserByEmail(email: string) {
    const user = await db.user.findUnique({
        where: {
            email
        }
    })

    return user;
}

export async function getUserByApiKey(apiKey: string) {
    const user = await db.user.findUnique({
        where: {
            apiKey
        }
    })

    return user;
}

export async function getUserSubscription(id: string) {
    const user = await getUserById(id);

    if (!user?.stripeSubscriptionId) {
        return null;
    }

    const subscription = await getSubscription(user.stripeSubscriptionId);

    return subscription;
}