"use client"

import { Suspense, useEffect } from "react";
import { RedirectToCheckout } from "./_components/redirect-to-checkout";

export default function Checkout() {
    return (
        <Suspense>
            <RedirectToCheckout/>
        </Suspense>
    )
}