import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(request) {
  const { listItems } = await request.json();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: listItems,
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/pricing",
  });

  return NextResponse.json({
    url: session.url,
  });
}