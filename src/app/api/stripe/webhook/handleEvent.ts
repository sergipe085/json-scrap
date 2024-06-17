import { stripe } from "@/lib/stripe";
import { Session } from "next-auth";
import Stripe from "stripe";
import { events } from "./events";

type Req = {
  event: Stripe.Event;
}

export async function handleEvent({ event }: Req) {
  if (events.hasOwnProperty(event.type)) {
    console.log("STRIPE EVENT: " + event.type)
    await events[event.type]?.(event.data);
  }
}