"use client"

import Link from "next/link";

type Props = {
    priceId: string;
}

export function CheckoutButton({ priceId }: Props) {
    return (
        <Link 
            href={{
                pathname: "/checkout",
                query: {
                    priceId
                }
            }}
            className="btn btn-primary"
        >
            Checkout
        </Link>
    )
}