import { api } from "@/lib/api";
import { ApiResponseType } from "@/schemas/apiResponse";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function RedirectToCheckout() {
    const { data, status } = useSession();
    
    const params = useSearchParams();
    const router = useRouter();
    const priceId = params.get("priceId")

    useEffect(() => {
        if (status != "loading") {
            if (status == "authenticated") {
                redirectToCheckout();
            }
            else {
                redirectToLogin();
            }
        }
    }, [status])

    if (status == "loading") {
        return null
    }

    if (!priceId) {
        return (
            <h1>No price id provided</h1>
        )
    }

    async function redirectToCheckout() {
        try {
            const { data } = await api.post<ApiResponseType>("/stripe/checkout", {
                priceId: priceId
            })
            
            if (data.ok) {
                router.replace(data.result.url)
            }
        }
        catch(err) {
            router.replace("/dashboard")
        }
    }

    async function redirectToLogin() {
        router.push(`/auth/login?callback=${`/checkout?priceId=${priceId}`}`)
    }

    return (
        <h1 className="text-neutral text-center self-center justify-center">redirecting to checkout page...</h1>
    )
}