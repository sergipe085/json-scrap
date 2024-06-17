import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createCheckout } from '@/actions/stripe/createCheckout';
import { Session } from 'next-auth';
import { ApiResponse } from '@/schemas/apiResponse';

export async function POST(request: NextRequest) {
    const session = await auth();
    const data = await request.json();

    const priceId = data.priceId;

    try {
        const checkoutSession = await createCheckout({
            priceId,
            session: session as Session
        })

        return ApiResponse({
            ok: true,
            result: checkoutSession
        })
    }
    catch(err: any) {
        return ApiResponse({
            ok: false,
            errorMessage: err.message,
            status: 400
        })
    }
}