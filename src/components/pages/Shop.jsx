import { useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { ProductCard } from "../product/ProductCard";
import { products, categories } from "../data/products";
import SearchIcon from "@mui/icons-material/Search";

export default function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchInputRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name");

    const selectedCategory = searchParams.get("category") || "all";

    useEffect(() => {
        if (location.state?.focusSearch && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [location.state]);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products;

        if (selectedCategory !== "all") {
            filtered = filtered.filter(
                (product) => product.category === selectedCategory
            );
        }

        if (searchTerm) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "name":
                    return a.name.localeCompare(b.name);
            }
        });
    }, [selectedCategory, searchTerm, sortBy]);

    const handleCategoryChange = (category) => {
        if (category === "all") {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    };

    return (
        <div className="min-h-screen color">
            <section className="bg-gradient-to-r from-furniture-cream to-furniture-warm py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-5">
                        Our Furniture Collection
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Discover our carefully curated selection of modern
                        furniture pieces designed to enhance your living space.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            ref={searchInputRef}
                            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-furniture-green"
                        />
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="sortBy"
                            className="text-sm font-medium text-gray-700"
                        >
                            Sort by:
                        </label>
                        <select
                            id="sortBy"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-furniture-green"
                        >
                            <option value="name">Name (A-Z)</option>
                            <option value="price-low">
                                Price: Low to High
                            </option>
                            <option value="price-high">
                                Price: High to Low
                            </option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => handleCategoryChange("all")}
                        className={`rounded-full px-4 py-2 font-semibold text-sm border transition-colors duration-200 ${
                            selectedCategory === "all"
                                ? "bg-[#3A785F] text-white hover:bg-[#2D6450]"
                                : "bg-white text-black hover:bg-[#EED5C4]"
                        }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => handleCategoryChange(category.name)}
                            className={`rounded-full px-4 py-2 font-semibold text-sm border transition-colors duration-200 ${
                                selectedCategory === category.name
                                    ? "bg-[#3A785F] text-white hover:bg-[#2D6450]"
                                    : "bg-white text-black hover:bg-[#EED5C4]"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                    {filteredAndSortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredAndSortedProducts.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-lg font-semibold mb-2">
                            No products found
                        </h3>
                        <p className="text-gray-500">
                            Try adjusting your filters or search terms.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
