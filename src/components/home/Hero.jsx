import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import heroImage from "../../assets/hero-bg.jpg";
import woodenChair from "../../assets/wooden-chair.jpg";
import blueArmchair from "../../assets/blue-armchair.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-furniture-cream to-furniture-warm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(58,120,95)]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - Main Hero Text */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 animate-fade-in">
            {/* Badge */}
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
              ✨ New Collection 2024
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
                Discover premium furniture that combines elegant design with
                exceptional comfort. Create the home of your dreams with our
                curated collection.
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm-row gap-4">
              <Link to="/shop">
                <Button
                  variant="contained"
                  size="lg"
                  sx={{ borderRadius: "9999px" }}
                  className="group"
                >
                  Shop Collection
                  <ArrowForwardIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
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
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Floating Product Cards */}
                <div className="absolute top-6 left-6">
                  <Link to="/shop?category=Chairs" className="block group">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={woodenChair}
                          alt="Wooden Chair"
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-sm">
                            Wooden Chair
                          </h3>
                          <p className="text-furniture-green font-bold">$199</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="absolute bottom-6 right-6">
                  <Link to="/shop?category=Armchairs" className="block group">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={blueArmchair}
                          alt="Premium Armchair"
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-sm">
                            Premium Elite
                          </h3>
                          <p className="text-furniture-green font-bold">$130</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-6 right-6">
                  <Link to="/shop">
                    <Badge
                      variant="outlined"
                      sx={{
                        color: "rgb(255, 0, 0)",
                        borderColor: "rgba(255, 0, 0, 0.2)",
                        backgroundColor: "rgba(255, 0, 0, 0.05)",
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
                      25% OFF
                    </Badge>
                  </Link>
                </div>
              </div>

              {/* Category Quick Links */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Link to="/shop?category=Chairs" className="group">
                  <div className="bg-[rgb(58,120,95)] border border-[rgb(58,120,95)] hover:bg-[rgba(58,120,95,0.87)]    text-white  rounded-xl p-4 text-center transition-all duration-300">
                    <h4 className="font-semibold">Chairs</h4>
                    <p className="text-sm opacity-80 group-hover:opacity-100">
                      50+ Items
                    </p>
                  </div>
                </Link>
                <Link to="/shop?category=Tables" className="group">
                  <div className="bg-furniture-warm hover:bg-furniture-green text-foreground hover:text-white rounded-xl p-4 text-center transition-all duration-300">
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
