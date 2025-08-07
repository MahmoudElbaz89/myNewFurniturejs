import { Link, useLocation, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "./logo.svg";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const categories = [
    { name: "Chairs", href: "/shop?category=Chairs" },
    { name: "Storage", href: "/shop?category=Storage" },
    { name: "Armchairs", href: "/shop?category=Armchairs" },
    { name: "Sofas", href: "/shop?category=Sofas" },
    { name: "Beds", href: "/shop?category=Beds" },
    { name: "Tables", href: "/shop?category=Tables" },
];

export default function Header() {
    const { getCartItemsCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const cartItemsCount = getCartItemsCount();

    return (
        <header className="color border-b border-gray-200 sticky top-0 z-50">
            {/* Main header */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src={logo}
                            alt="Furniture"
                            className="h-7 w-auto" // Resizes image proportionally
                        />
                        {/* <div className="w-8 h-8 bg-furniture-green rounded-md flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                              M
                          </span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                          Furniture
                      </span> */}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-medium transition-colors hover:text-furniture-green ${
                                    location.pathname === item.href
                                        ? "text-furniture-green"
                                        : "text-gray-600"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() =>
                                navigate("/shop", {
                                    state: { focusSearch: true },
                                })
                            }
                            className="md:inline-flex p-2 text-gray-600  rounded-lg hover:bg-[rgb(238,213,196)] transition-all duration-300"
                        >
                            <SearchIcon className="h-5 w-5" />
                        </button>
                        <button className="md:inline-flex p-2 text-gray-600  rounded-lg hover:bg-[rgb(238,213,196)] transition-all duration-300">
                            <Link to="/login">
                                <PersonIcon className="h-5 w-5" />
                            </Link>
                        </button>
                        <Link to="/cart" className="relative">
                            <button className="p-2 text-gray-600  rounded-lg hover:bg-[rgb(238,213,196)] transition-all duration-300">
                                <ShoppingCartIcon className="h-5 w-5" />
                                {cartItemsCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </button>
                        </Link>
                        <button
                            className="lg:hidden p-2 text-gray-600"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <MenuIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="hidden lg:flex items-center justify-center space-x-8 mt-4 pt-4 border-t border-gray-200">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.href}
                            className="text-sm text-gray-600 hover:text-furniture-green transition-colors"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
                        <div className="flex justify-end mb-4">
                            <button
                                className="p-2 text-gray-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <CloseIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-lg font-medium text-gray-900 hover:text-furniture-green transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200 mt-4">
                                <h3 className="text-sm font-medium text-gray-500 mb-3">
                                    Categories
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {categories.map((category) => (
                                        <Link
                                            key={category.name}
                                            to={category.href}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                            className="text-sm text-gray-600 hover:text-furniture-green transition-colors py-1"
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
