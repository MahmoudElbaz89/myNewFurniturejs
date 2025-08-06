import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useState,
} from "react";

// Create the cart context
const CartContext = createContext();

// Cart reducer function
function cartReducer(state, action) {
  console.log("Cart Reducer:", action.type, action);
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
      return [
        ...state,
        { product: action.product, quantity: action.quantity || 1 },
      ];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.product.id !== action.productId);

    case "UPDATE_QUANTITY":
      return state
        .map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);

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
  const [isInitialized, setIsInitialized] = useState(false);

  console.log("Cart State:", cart);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("furniture-cart");
      console.log("Loading cart from localStorage:", savedCart);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        // Ensure the cart has the correct structure
        if (Array.isArray(parsedCart)) {
          dispatch({ type: "LOAD_CART", cart: parsedCart });
        } else {
          console.warn(
            "Invalid cart data in localStorage, initializing empty cart"
          );
          dispatch({ type: "LOAD_CART", cart: [] });
        }
      } else {
        console.log("No saved cart found in localStorage");
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      // Initialize with empty cart on error
      dispatch({ type: "LOAD_CART", cart: [] });
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return; // Skip the initial render

    try {
      console.log("Saving cart to localStorage:", cart);
      localStorage.setItem("furniture-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cart, isInitialized]);

  // Add item to cart
  const addToCart = useCallback((product, quantity = 1) => {
    if (!product || !product.id) {
      console.error("Invalid product:", product);
      return;
    }
    dispatch({ type: "ADD_TO_CART", product, quantity });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((productId) => {
    if (!productId) {
      console.error("Invalid productId:", productId);
      return;
    }
    dispatch({ type: "REMOVE_FROM_CART", productId });
  }, []);

  // Update item quantity in cart
  const updateQuantity = useCallback((productId, quantity) => {
    if (!productId || quantity < 0) {
      console.error("Invalid update quantity:", { productId, quantity });
      return;
    }
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  }, []);

  // Clear all items from cart
  const clearCart = useCallback(() => {
    console.log("Clearing cart");
    dispatch({ type: "CLEAR_CART" });
  }, []);

  // Calculate cart total
  const getCartTotal = useCallback(() => {
    return cart.reduce(
      (total, item) =>
        total + (item.product?.price || 0) * (item.quantity || 0),
      0
    );
  }, [cart]);

  // Get cart items count
  const getCartItemsCount = useCallback(() => {
    return cart.reduce((count, item) => count + (item.quantity || 0), 0);
  }, [cart]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemsCount,
    }),
    [
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemsCount,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
