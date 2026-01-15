'use client';
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart, updateQuantity } from '@/store/features/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import CheckoutModal from '@/components/checkout/CheckoutModal';

type PaymentMethod = 'bitcoin' | 'ethereum' | 'usdt' | 'bank' | 'wire' | 'uk_bank' | 'revolut' | 'paypal' | 'cashapp' | 'apple_pay';

export default function CartPage() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('bitcoin');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  // Calculate discount based on payment method
  const isCrypto = ['bitcoin', 'ethereum', 'usdt'].includes(selectedPayment);
  const isRevolut = selectedPayment === 'revolut';
  
  let discountRate = 0;
  if (isCrypto) discountRate = 0.10;
  else if (isRevolut) discountRate = 0.05;

  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#eff6e0]">
        <div className="w-24 h-24 bg-[#aec3b0]/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-[#598392]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#01161e] mb-2">Your Cart is Empty</h1>
        <p className="text-[#598392] mb-8">It looks like you haven't added any items yet.</p>
        <Link href="/products" className="px-8 py-3 bg-[#124559] text-[#eff6e0] font-bold rounded-xl hover:bg-[#01161e] transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#eff6e0] min-h-screen pb-20 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-[#01161e] mb-2">Shopping Cart</h1>
          <p className="text-[#598392]">{items.reduce((a,c) => a + c.quantity, 0)} items in your cart</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Col: Items */}
          <div className="flex-grow space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white p-6 rounded-3xl shadow-lg border border-[#aec3b0]/50 flex gap-6 items-center hover:shadow-xl transition-shadow">
                <div className="relative w-24 h-24 bg-[#eff6e0] rounded-2xl overflow-hidden flex-shrink-0">
                  <Image 
                    src={item.product.image} 
                    alt={item.product.name} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-[#01161e] text-lg">{item.product.name}</h3>
                      <p className="text-[#598392] text-sm capitalize">{item.product.category.replace('-', ' ')}</p>
                    </div>
                    <span className="font-bold text-[#01161e] text-lg">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center bg-[#eff6e0] rounded-xl border-2 border-[#aec3b0]">
                      <button 
                        onClick={() => dispatch(updateQuantity({ id: item.product.id, quantity: Math.max(1, item.quantity - 1) }))} 
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#aec3b0]/30 text-[#124559] font-bold transition-colors"
                      >-</button>
                      <span className="w-12 text-center font-bold text-[#01161e]">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity + 1 }))} 
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#aec3b0]/30 text-[#124559] font-bold transition-colors"
                      >+</button>
                    </div>
                    
                    <button 
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="text-red-500 hover:text-red-700 text-sm font-bold flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Col: Summary & Payment */}
          <div className="lg:w-[450px] flex-shrink-0 space-y-6 animate-in slide-in-from-bottom-12 duration-700 delay-200 fill-mode-backwards">
            
            {/* Payment Method Selector */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#aec3b0]/50">
              <h3 className="font-bold text-xl text-[#01161e] mb-4">Select Payment Method</h3>
              
              <div className="space-y-6">
                
                {/* Crypto Payments Group */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">💳</span>
                    <h4 className="font-bold text-[#124559] uppercase text-sm tracking-wider">Crypto Payments</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">10% OFF</span>
                  </div>
                  <div className="space-y-2 pl-2">
                    <button
                      onClick={() => setSelectedPayment('bitcoin')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'bitcoin'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">₿</span>
                          <span className="font-bold text-[#01161e]">Bitcoin (BTC)</span>
                        </div>
                        {selectedPayment === 'bitcoin' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedPayment('ethereum')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'ethereum'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">Ξ</span>
                          <span className="font-bold text-[#01161e]">Ethereum (ETH)</span>
                        </div>
                        {selectedPayment === 'ethereum' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedPayment('usdt')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'usdt'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">₮</span>
                          <span className="font-bold text-[#01161e]">USDT (TRC20)</span>
                        </div>
                        {selectedPayment === 'usdt' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#aec3b0]/30"></div>

                {/* Other Payment Methods Group */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🏦</span>
                    <h4 className="font-bold text-[#124559] uppercase text-sm tracking-wider">Other Payment Methods</h4>
                  </div>
                  <div className="space-y-2 pl-2">
                    
                    {/* UK Bank */}
                    <button
                      onClick={() => setSelectedPayment('uk_bank')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'uk_bank'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🇬🇧</span>
                          <span className="font-bold text-[#01161e]">UK Bank Transfer</span>
                        </div>
                        {selectedPayment === 'uk_bank' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Revolut */}
                    <button
                      onClick={() => setSelectedPayment('revolut')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'revolut'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                          <span className="text-xl">🇷</span>
                          <div>
                             <span className="font-bold text-[#01161e]">Revolut Card/Crypto</span>
                             <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">-5%</span>
                          </div>
                        </div>
                        {selectedPayment === 'revolut' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>

                     {/* PayPal */}
                    <button
                      onClick={() => setSelectedPayment('paypal')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'paypal'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🅿️</span>
                          <span className="font-bold text-[#01161e]">PayPal</span>
                        </div>
                        {selectedPayment === 'paypal' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Cashapp */}
                    <button
                      onClick={() => setSelectedPayment('cashapp')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'cashapp'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">💵</span>
                          <span className="font-bold text-[#01161e]">CashApp</span>
                        </div>
                        {selectedPayment === 'cashapp' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>

                     {/* USA Apple Pay */}
                    <button
                      onClick={() => setSelectedPayment('apple_pay')}
                      className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                        selectedPayment === 'apple_pay'
                          ? 'border-[#124559] bg-[#124559]/5'
                          : 'border-[#aec3b0] hover:border-[#124559]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🍎</span>
                          <span className="font-bold text-[#01161e]">USA Apple Pay</span>
                        </div>
                        {selectedPayment === 'apple_pay' && (
                          <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </button>

                  </div>
                </div>

              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#aec3b0]/50 sticky top-24">
              <h3 className="font-bold text-xl text-[#01161e] mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#598392]">
                  <span>Subtotal</span>
                  <span className={(isCrypto || isRevolut) ? 'line-through' : 'font-bold text-[#01161e]'}>${subtotal.toFixed(2)}</span>
                </div>
                
                {(isCrypto || isRevolut) && (
                  <>
                    <div className="flex justify-between text-green-600 font-bold animate-in fade-in slide-in-from-right-4 duration-300">
                      <span>Discount ({discountRate * 100}%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#01161e] font-bold text-lg animate-in fade-in slide-in-from-right-4 duration-300 delay-100">
                      <span>Discounted Price</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </>
                )}
                
                <div className="flex justify-between text-[#598392]">
                  <span>Shipping</span>
                  <span className="text-[#124559] font-medium">Calculated at Invoice</span>
                </div>
                
                <div className="border-t border-[#aec3b0]/30 my-4 pt-4 flex justify-between font-black text-2xl text-[#01161e]">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {(isCrypto || isRevolut) && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-center animate-in fade-in zoom-in-50 duration-300">
                  <p className="text-green-700 font-bold text-sm">
                    🎉 You're saving ${discount.toFixed(2)} with {isCrypto ? 'crypto' : 'Revolut'}!
                  </p>
                </div>
              )}

              <button 
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-[#124559] text-[#eff6e0] font-bold py-4 rounded-xl hover:bg-[#01161e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-center text-[#598392] mt-4">
                🔒 Secure Checkout. Transactions are encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isCheckoutOpen && <CheckoutModal onClose={() => setIsCheckoutOpen(false)} initialPaymentMethod={selectedPayment} />}
    </div>
  );
}
