'use client';

import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { setCart } from '@/store/features/cartSlice';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
        // Load cart from localStorage on mount
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                store.dispatch(setCart(parsedCart));
            } catch (e) {
                console.error('Failed to parse cart from localStorage', e);
            }
        }
        isInitialized.current = true;
    }

    // Subscribe to store changes to save cart to localStorage
    const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        localStorage.setItem('cart', JSON.stringify(state.cart.items));
    });

    return () => {
        unsubscribe();
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
