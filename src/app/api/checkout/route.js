import { NextResponse } from "next/server";
import { Stripe } from "stripe";


export const POST = async (request) => {

 try {
  const { dataItems } = await request.json();

  const urlOrigin = request.headers.get('origin');
  const urlReferer = request.headers.get('referer');

  if (!Array.isArray(dataItems)) {
    return NextResponse.json(
      { data: 'Invalid data: dataItems should be an array' },
      { status: 400 }
    );
  }

  for (const item of dataItems) {
    if (!item.price || !item.quantity) {
      return NextResponse.json(
        { data: 'Invalid data: price and/or quantity missing in one or more items' },
        { status: 483 }
      );
    }
  }
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: dataItems, 
    success_url: `${urlOrigin}/success?payment=true`,
    cancel_url: urlReferer,
  });

  return NextResponse.json({ url: session.url });

 } catch (error) {
  console.error("An error occurred:", error);
  return NextResponse.json({data: 'An error occurred while processing your request!'}, { status: 483 });
}
}