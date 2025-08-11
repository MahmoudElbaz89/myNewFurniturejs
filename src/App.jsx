import { Snackbar, Alert } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
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
import Checkout from "./components/pages/Checkout";
import ProductDetails from "./components/product/ProductDetails";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { products as initialProducts } from "./components/data/products";
const queryClient = new QueryClient();
const stripePromise = loadStripe(
    "pk_test_51RtBVYFdpTDDRKF9c98ISBfOC2xXL75D37DMBzjkB6kcJ7SNSuZlAie8HMhMHss2V9RQYQyff8ADKDQxw6Naz4rr00l2qRZbBb"
);

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
}

const App = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    useEffect(() => {
        try {
            const saved = localStorage.getItem("products");
            if (!saved) {
                localStorage.setItem(
                    "products",
                    JSON.stringify(initialProducts)
                );
            }
        } catch (err) {
            console.error("Error initializing products in localStorage:", err);
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <ScrollToTop />
                <Elements stripe={stripePromise}>
                    <Toaster richColors />
                    <CartProvider>
                        <div className="min-h-screen flex flex-col color">
                            <Header />
                            <main className="flex-1 flex flex-col">
                                <Routes>
                                    <Route path="/" element={<Index />} />
                                    <Route path="/shop" element={<Shop />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/contact"
                                        element={<Contact />}
                                    />
                                    <Route path="/login" element={<Login />} />
                                    <Route
                                        path="/signup"
                                        element={<SignUp />}
                                    />
                                    <Route
                                        path="/checkout"
                                        element={<Checkout />}
                                    />
                                    <Route
                                        path="/products/:id"
                                        element={<ProductDetails />}
                                    />
                                    <Route path="/terms" element={<Terms />} />
                                    <Route
                                        path="/privacy"
                                        element={<Privacy />}
                                    />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </main>
                            <Footer />
                        </div>

                        {/* Snackbar Example */}
                        <Snackbar
                            open={snackbarOpen}
                            autoHideDuration={3000}
                            onClose={() => setSnackbarOpen(false)}
                        >
                            <Alert
                                severity="success"
                                onClose={() => setSnackbarOpen(false)}
                            >
                                This is a success message!
                            </Alert>
                        </Snackbar>
                    </CartProvider>
                </Elements>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
