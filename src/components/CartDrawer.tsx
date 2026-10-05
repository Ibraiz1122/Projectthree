import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, Plus, Minus, CheckCircle, CreditCard, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, totalPrice, totalItems } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Checkout form fields
  const [payerName, setPayerName] = useState('');
  const [payerEmail, setPayerEmail] = useState('');
  const [paymentOption, setPaymentOption] = useState<'card' | 'interac'>('card');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'DAVIDGOLF10' || coupon.trim().toUpperCase() === 'ONTARIOPGA') {
      setDiscount(0.1); // 10% off
    } else {
      alert('Invalid coupon code. Try "DAVIDGOLF10" for 10% off!');
    }
  };

  const finalPrice = Math.max(0, totalPrice * (1 - discount));

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      clearCart();
      setOrderComplete(false);
      setCheckoutModalOpen(false);
      setIsCartOpen(false);
    }, 4000);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />

        {/* Drawer Panel */}
        <div className="relative ml-auto w-full max-w-md bg-brand-card border-l border-brand-cardBorder h-full flex flex-col justify-between shadow-2xl z-10">
          {/* Header */}
          <div className="p-5 border-b border-brand-cardBorder flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-brand-purple-600/20 text-brand-purple-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base">Your Cart</h3>
                <p className="text-xs text-brand-muted">{totalItems} item{totalItems === 1 ? '' : 's'} selected</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-brand-muted hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-brand-muted">
                <ShoppingBag className="w-12 h-12 text-brand-muted/40 mb-3" />
                <h4 className="font-display font-semibold text-white text-base mb-1">Your cart is empty</h4>
                <p className="text-xs text-brand-muted max-w-xs">
                  Browse our coaching packages, sensor labs, or DB Golf tour gear to start improving your game.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 p-3.5 rounded-xl bg-brand-surface border border-brand-cardBorder group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-brand-dark shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-semibold text-xs text-white line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-brand-muted hover:text-rose-400 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-brand-muted mt-0.5">${item.product.price} CAD each</p>

                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-brand-cardBorder rounded-lg bg-brand-dark/70">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:text-white text-brand-muted transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:text-white text-brand-muted transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-bold text-sm text-brand-purple-300">
                        ${item.product.price * item.quantity} CAD
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-brand-cardBorder bg-brand-dark/40 space-y-4">
              {/* Coupon input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code (e.g. DAVIDGOLF10)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-lg bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500 uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-xs font-semibold rounded-lg bg-brand-surface hover:bg-brand-surface/80 border border-brand-cardBorder text-brand-light"
                >
                  Apply
                </button>
              </form>

              {/* Price summary */}
              <div className="space-y-1.5 text-xs text-brand-muted">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">${totalPrice.toFixed(2)} CAD</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%)</span>
                    <span>-${(totalPrice * discount).toFixed(2)} CAD</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-brand-cardBorder">
                  <span>Total</span>
                  <span className="text-brand-purple-300">${finalPrice.toFixed(2)} CAD</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white font-display font-semibold text-sm shadow-purple-glow hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>Proceed to Checkout</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-brand-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Secure payment <span className="opacity-40 mx-1">|</span> Burlington, ON facility guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-brand-card border border-brand-cardBorder rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {orderComplete ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Order Confirmed!</h3>
                <p className="text-sm text-brand-muted max-w-sm mx-auto">
                  Thank you, <span className="text-white font-semibold">{payerName}</span>. Your receipt and package activation details have been sent to <span className="text-white font-semibold">{payerEmail}</span>. David Banks will contact you shortly to coordinate your schedule.
                </p>
                <div className="p-3 bg-brand-surface rounded-xl border border-brand-cardBorder text-xs text-brand-purple-300">
                  Questions? Call David directly at 905-464-7777
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-white">Complete Your Order</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    David Banks Golf — Total: <span className="text-brand-purple-400 font-bold">${finalPrice.toFixed(2)} CAD</span>
                  </p>
                </div>

                <form onSubmit={handleCompleteOrder} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-light mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Henderson"
                      value={payerName}
                      onChange={(e) => setPayerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-light mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={payerEmail}
                      onChange={(e) => setPayerEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-light mb-1.5">Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentOption('card')}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 ${
                          paymentOption === 'card'
                            ? 'border-brand-purple-500 bg-brand-purple-950/40 text-white'
                            : 'border-brand-cardBorder bg-brand-surface text-brand-muted'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Credit / Debit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentOption('interac')}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 ${
                          paymentOption === 'interac'
                            ? 'border-brand-purple-500 bg-brand-purple-950/40 text-white'
                            : 'border-brand-cardBorder bg-brand-surface text-brand-muted'
                        }`}
                      >
                        <span>Interac e-Transfer</span>
                      </button>
                    </div>
                  </div>

                  {paymentOption === 'card' ? (
                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="block text-[11px] font-medium text-brand-muted mb-1">Card Number</label>
                        <input
                          type="text"
                          required
                          placeholder="4500 •••• •••• 1234"
                          className="w-full px-3.5 py-2 text-xs rounded-lg bg-brand-surface border border-brand-cardBorder text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-medium text-brand-muted mb-1">Expiry (MM/YY)</label>
                          <input
                            type="text"
                            required
                            placeholder="08/28"
                            className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface border border-brand-cardBorder text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-brand-muted mb-1">CVC</label>
                          <input
                            type="text"
                            required
                            placeholder="789"
                            className="w-full px-3 py-2 text-xs rounded-lg bg-brand-surface border border-brand-cardBorder text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-cardBorder text-xs space-y-1.5 text-brand-muted">
                      <p className="text-white font-medium">Interac e-Transfer Instructions:</p>
                      <p>Send transfer to: <span className="text-brand-purple-300 font-mono font-semibold">davidbanksgolf@gmail.com</span></p>
                      <p>Automatic deposit is enabled. Mention your name in transfer memo.</p>
                    </div>
                  )}

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white font-display font-semibold text-sm shadow-purple-glow hover:opacity-90 transition-all"
                    >
                      Confirm Payment (${finalPrice.toFixed(2)} CAD)
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
