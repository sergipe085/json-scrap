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