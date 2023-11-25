const functions = require("firebase-functions");

const DOMAIN = functions.config().domains.prod;

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: DOMAIN + "/?success=1",
    cancel_url: DOMAIN + data.cancel_url,
    line_items: data.line_items,
  });

  return {
    id: session.id,
  };
});
