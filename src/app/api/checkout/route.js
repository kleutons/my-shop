import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(request) {
  const { dataItems } = await request.json();
  
  const urlOrigin = request.headers.get('origin');
  const urlReferer = request.headers.get('referer');
  


  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: dataItems, 
    success_url: `${urlOrigin}/success?payment=true`,
    cancel_url: urlReferer,
  });

  return NextResponse.json({
    url: session.url
  });
}