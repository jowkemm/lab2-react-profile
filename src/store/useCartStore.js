import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  // Action: Add item to cart (Check for duplicates)
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If item exists, increase quantity
      return {
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    // If not exists, add new item with quantity 1
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  // Action: Remove item completely
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId),
  })),

  // Action: Clear all items
  clearCart: () => set({ cart: [] }),

  // Optional Helper: Decrease quantity
  decreaseQuantity: (productId) => set((state) => ({
    cart: state.cart.map((item) => 
        item.id === productId && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    )
  }))
}));