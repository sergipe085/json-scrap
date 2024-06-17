import { Stripe } from 'stripe';
import { subscriptionCreated } from './subscription/subscriptionCreated';
import { subscriptionCanceled } from './subscription/subscriptionCanceled';
import { checkoutCompleted } from './checkout/checkoutCompleted';
import { subscriptionUpdated } from './subscription/subscriptionUpdated';

const events: Partial<Record<Stripe.Event.Type, (event: Stripe.Event.Data) => Promise<void>>> = {
    "customer.subscription.created": subscriptionCreated,
    "customer.subscription.deleted": subscriptionCanceled,
    "customer.subscription.updated": subscriptionUpdated,
    "checkout.session.completed": checkoutCompleted
};

export { events };
