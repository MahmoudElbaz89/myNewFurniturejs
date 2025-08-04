import React, { createContext, useContext, useReducer, useEffect } from "react";

// Create the cart context
const CartContext = createContext();

// Cart reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check if item already exists in cart
      const existingItemIndex = state.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (existingItemIndex >= 0) {
        // If item exists, update its quantity
        const newState = [...state];
        newState[existingItemIndex].quantity += action.quantity || 1;
        return newState;
      }
      
      // If item doesn't exist, add it to cart
      return [...state, { product: action.product, quantity: action.quantity || 1 }];
    }
      
    case "REMOVE_FROM_CART":
      return state.filter(item => item.product.id !== action.productId);
      
    case "UPDATE_QUANTITY":
      return state
        .map(item =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        )
        .filter(item => item.quantity > 0);
        
    case "CLEAR_CART":
      return [];
      
    case "LOAD_CART":
      return action.cart || [];
      
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("furniture-cart");
      if (savedCart) {
        dispatch({ type: "LOAD_CART", cart: JSON.parse(savedCart) });
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("furniture-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    dispatch({ type: "ADD_TO_CART", product, quantity });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  // Update item quantity in cart
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  };

  // Clear all items from cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + (item.product.price || 0) * (item.quantity || 0),
      0
    );
  };

  // Get total number of items in cart
  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + (item.quantity || 0), 0);
  };

  // Check if a product is in the cart
  const isInCart = (productId) => {
    return cart.some((item) => item.product.id === productId);
  };

  // Get quantity of a specific product in cart
  const getProductQuantity = (productId) => {
    const item = cart.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isInCart,
    getProductQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}