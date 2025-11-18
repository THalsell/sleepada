'use client';

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { SizeOption, RVSizeOption, DormSizeOption, PillowSizeOption, PetSizeOption } from '@/types/product';

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  size: SizeOption | RVSizeOption | DormSizeOption | PillowSizeOption | PetSizeOption;
  quantity: number;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Load cart from localStorage on initial mount using useState initializer
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('sleepada-cart');
      if (savedCart) {
        try {
          return JSON.parse(savedCart);
        } catch (error) {
          console.error('Failed to load cart:', error);
        }
      }
    }
    return [];
  });
  const isFirstRender = useRef(true);

  // Save cart to localStorage whenever it changes (skip first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('sleepada-cart', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'id'>) => {
    setItems((prevItems) => {
      // Check if item with same product, size already exists
      const existingItemIndex = prevItems.findIndex(
        (i) => i.productId === item.productId && i.size === item.size
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += item.quantity;
        return newItems;
      } else {
        // Add new item with unique ID
        return [...prevItems, { ...item, id: `${item.productId}-${item.size}-${Date.now()}` }];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
