import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../../product/ProductCard";
import { products, categories } from "../data/products";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const selectedCategory = searchParams.get("category") || "all";

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-furniture-cream to-furniture-warm py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg-5xl font-bold mb-4">
            Our Furniture Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of modern furniture pieces
            designed to enhance your living space.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <TextField
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <SearchIcon className="text-muted-foreground h-4 w-4 mr-2" />
                ),  
                sx: {
                  '& .MuiOutlinedInput-root': {
                    paddingLeft: '12px',
                  },
                },
              }}
              sx={{
                '& .  MuiOutlinedInput-root': {
                  paddingLeft: '8px',
                },
              }}
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-4">
            <div className="relative w-48">
              <FilterListIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md bg-background appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ArrowDropDownIcon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-48 px-3 py-2 border rounded-md bg-background appearance-none"
            >
              <option value="name">Name</option>
              <option value="price-low">Price to High</option>
              <option value="price-high">Price to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedCategory === "all" ? "contained" : "outlined"}
            onClick={() => handleCategoryChange("all")}
            sx={{ borderRadius: '9999px', textTransform: 'none', mr: 1, mb: 1 }}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={
                selectedCategory === category.name ? "contained" : "outlined"
              }
              onClick={() => handleCategoryChange(category.name)}
              sx={{
                borderRadius: '9999px',
                textTransform: 'none',
                mr: 1,
                mb: 1,
                '&.MuiButton-contained': {
                  backgroundColor: 'hsl(var(--furniture-green))',
                  '&:hover': {
                    backgroundColor: 'hsl(var(--furniture-green) / 0.9)',
                  },
                },
              }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
