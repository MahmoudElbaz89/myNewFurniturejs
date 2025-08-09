import { ProductCard } from "../product/ProductCard";
import { products } from "../data/products";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export function BestSellers() {
    const featuredProducts = useMemo(
        () => products.filter((product) => product.featured),
        []
    );

    return (
        <section className="py-20 color">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg-4xl font-bold mb-4">
                        Bestsellers of the week
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Discover our most-loved pieces that combine style,
                        comfort, and functionality. Handpicked by our customers,
                        for your perfect home.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/shop">
                        <button className="hover:bg-furniture-green hover:text-white font-semibold text-furniture-green border-furniture-green border-2 rounded-md px-8 py-2">
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
