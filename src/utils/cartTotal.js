export function calculateCartTotal(cart) {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = total > 300 ? 0 : total * 0.05; // Free if > $300, otherwise 5%
  
    return { total, deliveryFee };
  }
  