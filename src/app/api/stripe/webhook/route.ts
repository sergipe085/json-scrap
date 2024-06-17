import { stripe } from "@/lib/stripe";
import { NextRequest } from "next/server";
import Stripe from "stripe";
import { handleEvent } from "./handleEvent";

type METADATA = {
  userId: string;
  priceId: string;
};

export async function POST(req: NextRequest) {
  const body = await req.text();
  const endpointSecret = process.env.SPRIPE_WEBHOOK_SECRET as string;
  const sig = req.headers.get('stripe-signature') as string;

  const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);

  await handleEvent({
    event
  })

  return new Response();
}