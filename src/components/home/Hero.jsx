import React from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { products } from "../data/products";

import heroImage from "../../assets/hero-bg.jpg";

export function Hero() {
  const featuredProduct = products.find((p) => p.id === "1");
  const featuredProduct2 = products.find((p) => p.id === "14");

  const { name, price, image, id } = featuredProduct || products[1];
  const {
    name: name2,
    price: price2,
    image: image2,
    id: id2,
  } = featuredProduct2 || products[1];
  console.log(featuredProduct);
  console.log(featuredProduct2);
  
  return (
      <section className="relative bg-gradient-to-r from-furniture-cream to-furniture-warm overflow-hidden ">
          <div className="container mx-auto px-4 py-12 xl:py-16">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20">
                  {/* Left Content - Main Hero Text */}
                  <div className="lg:col-span-6 space-y-6 md:space-y-8 animate-fade-in">
                      <Badge
                          variant="outlined"
                          sx={{
                              color: "rgb(58,120,95)",
                              borderColor: "rgba(58,120,95,0.2)",
                              backgroundColor: "rgba(58,120,95,0.05)",
                              padding: "0.5rem 1rem",
                              borderRadius: "9999px",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                              textTransform: "none",
                              "& .MuiBadge-badge": {
                                  position: "relative",
                                  transform: "none",
                                  margin: 0,
                                  padding: 0,
                              },
                          }}
                      >
                          ✨ New Collection 2025
                      </Badge>

                      {/* Main Headline */}
                      <div className="space-y-4">
                          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                              Transform Your
                              <span className="block text-furniture-green mt-2">
                                  Living Space
                              </span>
                          </h1>
                          <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                              Discover premium furniture that combines elegant
                              design with exceptional comfort. Create the home
                              of your dreams with our curated collection.
                          </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-6 text-sm">
                          <div className="flex items-center gap-2">
                              <LocalShippingIcon className="h-4 w-4 text-furniture-green" />
                              <span>Free Delivery</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <SecurityIcon className="h-4 w-4 text-furniture-green" />
                              <span>5 Year Warranty</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <FavoriteBorderIcon className="h-4 w-4 text-furniture-green" />
                              <span>Handcrafted</span>
                          </div>
                      </div>

                      {/* shop Button */}
                      <div className="z-50">
                          <Link to="/shop">
                              <button className="bg-furniture-green font-semibold text-white rounded-md px-5 py-2 hover:scale-105 hover:bg-[rgb(76,132,110)] transition-all duration-300 group">
                                  <span>Shop Collection</span>
                                  <ArrowForwardIcon
                                      fontSize=""
                                      className="ml-2 group-hover:translate-x-1"
                                  />
                              </button>
                          </Link>
                      </div>
                  </div>

                  {/* Right Content - Product Showcase */}
                  <div className="lg:col-span-6 mt-8 lg:mt-0">
                      <div className="relative">
                          {/* Main Hero Image */}
                          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                              <img
                                  src={heroImage}
                                  alt="Premium Furniture Collection"
                                  className="w-full h-[400px] lg:h-[500px]  object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                              {/* Floating Product Cards */}
                              <div className="absolute top-6 left-6 hover:-translate-y-2 transition-all duration-300">
                                  <Link
                                      to={`/products/${id}`}
                                      className="block"
                                  >
                                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                          <div className="flex items-center gap-3">
                                              <img
                                                  src={image}
                                                  alt={name}
                                                  className="w-12 h-12 rounded-lg object-cover"
                                              />
                                              <div>
                                                  <h3 className="font-semibold text-sm">
                                                      {name}
                                                  </h3>
                                                  <p className="text-furniture-green font-bold">
                                                      <span className="text-sm">
                                                          EGP&nbsp;
                                                      </span>
                                                      {price.toFixed()}
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </Link>
                              </div>

                              <div className="absolute bottom-6 right-6  hover:-translate-y-2 transition-all duration-300 ">
                                  <Link
                                      to={`/products/${id2}`}
                                      className="block"
                                  >
                                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                          <div className="flex items-center gap-3">
                                              <img
                                                  src={image2}
                                                  alt={name2}
                                                  className="w-12 h-12 rounded-lg object-cover"
                                              />
                                              <div>
                                                  <h3 className="font-semibold text-sm">
                                                      {name2}
                                                  </h3>
                                                  <p className="text-furniture-green font-bold">
                                                      <span className="text-sm">
                                                          EGP&nbsp;
                                                      </span>
                                                      {price2.toFixed()}
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </Link>
                              </div>

                              {/* Discount Badge */}
                              <div className="absolute top-6 right-6">
                                  <Link to="/shop">
                                      <button className="bg-red-600 font-bold text-white rounded-full px-4 py-2 hover:scale-105 transition-all duration-300">
                                          25% OFF
                                      </button>
                                  </Link>
                              </div>
                          </div>

                          {/* Category Quick Links */}
                          <div className="grid grid-cols-2 gap-4 mt-6">
                              <Link
                                  to="/shop?category=Chairs"
                                  className="group"
                              >
                                  <div className="bg-[rgb(199,230,219)] border  hover:bg-furniture-green hover:text-white   text-black  rounded-xl p-4 shadow-md text-center transition-all duration-300">
                                      <h4 className="font-semibold">Chairs</h4>
                                      <p className="text-sm opacity-80 group-hover:opacity-100">
                                          50+ Items
                                      </p>
                                  </div>
                              </Link>
                              <Link
                                  to="/shop?category=Tables"
                                  className="group"
                              >
                                  <div className="bg-[rgb(255,219,195)] hover:bg-furniture-green text-foreground hover:text-white rounded-xl p-4 shadow-md text-center transition-all duration-300">
                                      <h4 className="font-semibold">Tables</h4>
                                      <p className="text-sm opacity-80 group-hover:opacity-100">
                                          30+ Items
                                      </p>
                                  </div>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 md:mt-16 lg:mt-24">
                  {[
                      { value: "2000+", label: "Happy Customers" },
                      { value: "500+", label: "Premium Products" },
                      { value: "15+", label: "Years Experience" },
                      { value: "98%", label: "Satisfaction Rate" },
                  ].map((stat, index) => (
                      <div key={index} className="text-center">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-furniture-green">
                              {stat.value}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base">
                              {stat.label}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
}