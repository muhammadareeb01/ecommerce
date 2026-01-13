'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart, setCartOpen } from '@/store/features/cartSlice';

export default function CartDropdown() {
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
        {/* Backdrop to close click outside */}
        <div className="fixed inset-0 z-40" onClick={() => dispatch(setCartOpen(false))}></div>

        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Shopping Cart ({items.reduce((a,c) => a + c.quantity, 0)})</h3>
            <button onClick={() => dispatch(setCartOpen(false))} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    Your cart is empty.
                </div>
            ) : (
                items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                        <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <Image 
                                src={item.product.image} 
                                alt={item.product.name} 
                                fill 
                                className="object-cover" 
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.product.name}</h4>
                            <div className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</div>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-sm font-medium text-indigo-600">${(item.product.price * item.quantity).toFixed(2)}</span>
                                <button 
                                    onClick={() => dispatch(removeFromCart(item.product.id))}
                                    className="text-xs text-red-400 hover:text-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>

        {items.length > 0 && (
            <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Total</span>
                    <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
                <Link 
                    href="/cart"
                    onClick={() => dispatch(setCartOpen(false))}
                    className="block w-full bg-indigo-600 text-white text-center font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                    View Full Cart
                </Link>
            </div>
        )}
        </div>
    </>
  );
}
