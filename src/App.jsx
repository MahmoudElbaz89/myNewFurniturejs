import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/pages/Index";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Checkout from "./components/pages/ShippingInfo";
import ProductDetails from "./components/pages/ProductDetails";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Toaster } from "sonner";
// import "./index.css";

const queryClient = new QueryClient();
const stripePromise = loadStripe(
  "pk_test_51RtBVYFdpTDDRKF9c98ISBfOC2xXL75D37DMBzjkB6kcJ7SNSuZlAie8HMhMHss2V9RQYQyff8ADKDQxw6Naz4rr00l2qRZbBb"
);
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Elements stripe={stripePromise}>
        <Toaster richColors />
          <CartProvider>
            <div className="min-h-screen flex flex-col bg-color">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Snackbar>
              <Alert />
            </Snackbar>
          </CartProvider>
      </Elements>
    </Router>
  </QueryClientProvider>
);

export default App;
