"use client"

import { api } from "@/lib/api";
import { ApiResponseType } from "@/schemas/apiResponse";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    priceId: string;
}

export function CheckoutButton({ priceId }: Props) {
    const router = useRouter();

    return (
        <Link 
        href={{
            pathname: "/checkout",
            query: {
                priceId
            }
        }}
        className="btn btn-primary">
            Checkout
        </Link>
    )
}