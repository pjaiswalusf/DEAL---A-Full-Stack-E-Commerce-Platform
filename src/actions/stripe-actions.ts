"use server";

import { getCurrentSession } from '@/actions/auth';
import { getOrCreateCart } from '@/actions/cart-actions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia'
});

export const createCheckoutSession = async (cartId: string) => {
    const { user } = await getCurrentSession();
    const cart = await getOrCreateCart(cartId);

    if(cart.items.length === 0) {
        throw new Error('Cart is empty');
    }

    const totalPrice = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    console.log(cart.items.map((item) => item.title))

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: cart.items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                    images: [item.image]
                },
                unit_amount: Math.round(item.price * 100)
            },
            quantity: item.quantity,
        })),
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL!}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL!}`,
        customer_email: user?.email,
        metadata: {
            cartId: cart.id,
            userId: user?.id?.toString() || '-'
        },
        shipping_address_collection: {
            allowed_countries: ['US']
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        currency: 'usd',
                        amount: totalPrice >= 15 ? 0 : 5 * 100 // $5.00 USD
                    },
                    display_name: totalPrice >= 15 ? 'Free Shipping' : 'Shipping',
                    delivery_estimate: {
                        minimum: {
                            unit: 'business_day',
                            value: 3
                        },
                        maximum: {
                            unit: 'business_day',
                            value: 5
                        },
                    }
                }
            }
        ]
    });

    if(!session.url) {
        throw new Error("Failed to create checkout session");
    }

    return session.url;
}