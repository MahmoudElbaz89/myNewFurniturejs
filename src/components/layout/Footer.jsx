import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import logo from "./logo.svg";

export default function Footer() {
    return (
        <footer
            className="bg-[rgb(242,240,237)] w-full border-t border-gray-200 overflow-hidden "
            aria-label="Site Footer"
        >
            <div className="container py-6 px-4">
                <div className="flex flex-col gap-8 items-center md:items-start md:flex-row md:justify-between w-full">
                    <div className="space-y-3 max-w-xs text-center md:text-left">
                        <Link
                            to="/"
                            className="flex items-center justify-center space-x-2  md:justify-start"
                        >
                            <img
                                src={logo}
                                alt="Furniture"
                                className="h-7 w-auto" // Resizes image proportionally
                            />
                            <p className="rounded-sm flex items-center justify-center text-xl font-bold text-gray-900">
                                Modern Furniture
                            </p>
                        </Link>
                        <p className="text-gray-500 text-sm">
                            Exquisite design combined with functionalities.
                            Creating beautiful spaces for modern living.
                        </p>
                        <p className="text-sm text-gray-500">
                            📞 +201099613458
                        </p>
                    </div>

                    <div className="md:w-fit text-center">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 flex items-center justify-center md:block gap-4">
                            <li className="self-end">
                                <Link
                                    to="/"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-fit text-center">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Categories
                        </h3>
                        <ul className="space-y-2 flex items-center justify-center md:block gap-4">
                            <li className="self-end">
                                <Link
                                    to="/shop?category=Chairs"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    Chairs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop?category=Sofas"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    Sofas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop?category=Tables"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    Tables
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shop?category=Storage"
                                    className="text-gray-500 hover:text-furniture-green transition-colors"
                                >
                                    Storage
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-fit">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                            Follow Us
                        </h3>
                        <div className="flex space-x-6 justify-center">
                            <a
                                href="https://www.facebook.com"
                                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                            >
                                <Facebook fontSize="small" />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                className="text-gray-500 hover:text-purple-600 transition-colors duration-300"
                            >
                                <Instagram fontSize="small" />
                            </a>
                            <a
                                href="https://www.x.com"
                                className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
                            >
                                <Twitter fontSize="small" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border-t border-gray-300 py-6 text-sm text-center text-gray-500">
                © {new Date().getFullYear()} Furniture. All rights reserved.
            </div>
        </footer>
    );
}
