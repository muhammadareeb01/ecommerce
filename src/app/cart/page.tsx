'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart, updateQuantity } from '@/store/features/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import CheckoutModal from '@/components/checkout/CheckoutModal';

export default function CartPage() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-gray-50">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">It looks like you haven't added any items yet.</p>
            <Link href="/" className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                Start Shopping
            </Link>
        </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Section>
        <h1 className="text-3xl font-black text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Col: Items */}
            <div className="flex-grow space-y-4">
                {items.map((item) => (
                    <div key={item.product.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-center">
                        <div className="relative w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                            <Image 
                                src={item.product.image} 
                                alt={item.product.name} 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        
                        <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{item.product.name}</h3>
                                    <p className="text-gray-500 text-sm">{item.product.category}</p>
                                </div>
                                <span className="font-bold text-gray-900 text-lg">${(item.product.price * item.quantity).toFixed(2)}</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                                    <button 
                                        onClick={() => dispatch(updateQuantity({ id: item.product.id, quantity: Math.max(1, item.quantity - 1) }))} 
                                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-gray-600"
                                    >-</button>
                                    <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                                    <button 
                                        onClick={() => dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity + 1 }))} 
                                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 text-gray-600"
                                    >+</button>
                                </div>
                                
                                <button 
                                    onClick={() => dispatch(removeFromCart(item.product.id))}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center"
                                >
                                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Col: Summary */}
            <div className="lg:w-96 flex-shrink-0">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                    <h3 className="font-bold text-xl text-gray-900 mb-6">Order Summary</h3>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span className="text-green-600 font-medium">Calculated at Invoice</span>
                        </div>
                        <div className="border-t border-gray-100 my-4 pt-4 flex justify-between font-bold text-lg text-gray-900">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => setIsCheckoutOpen(true)}
                        className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                    >
                        Proceed to Checkout
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                        Secure Checkout. Transactions are encrypted.
                    </p>
                </div>
            </div>
        </div>
      </Section>

      {isCheckoutOpen && <CheckoutModal onClose={() => setIsCheckoutOpen(false)} />}
    </div>
  );
}
