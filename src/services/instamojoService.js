const stripeService = {};
const StripeLoadTimer = setInterval(() => {
    if (window.Stripe) {
      stripeService.Stripe = window.Stripe;
      clearInterval(StripeLoadTimer);
    }
}, 100);

// Customise the Stripe object here if needed

export default stripeService;