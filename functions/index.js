const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: data.success_url,
    cancel_url: data.cancel_url,
    line_items: data.line_items,
  });

  return {
    id: session.id,
  };
});
