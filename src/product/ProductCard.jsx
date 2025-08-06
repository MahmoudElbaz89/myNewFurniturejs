import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
} from "@mui/material";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { useCart } from "../contexts/CartContext";
import { Visibility as Eye, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        transition: "all 0.3s ease, transform 0.3s ease",
        "&:hover": {
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: 256,
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              borderRadius: "100px",
            },
          }}
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Chip
            label={`${discountPercentage}% OFF`}
            color="error"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              fontWeight: "bold",
              color: "white",
            }}
          />
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center  justify-center space-x-2">
          <Link to={`/product/${product.id}`}>
            <Button size="icon" variant="secondary" className="shadow-lg">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            size="icon"
            variant="furniture"
            className="shadow-lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardActionArea>

      <CardContent sx={{ p: 3 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection:"column",
            marginBottom: 8,
          }}
        >
          <h3 style={{ margin: 0, fontWeight: 600, fontSize: "1.125rem" }}>
            {product.name}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent:"space-between",

              marginBottom: "1rem",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "1.125rem" }}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "text.secondary",
                  textDecoration: "line-through",
                  marginLeft: "5px",
                }}
              >
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

  

        <CardActions sx={{ px: 0,alignItems:"flex-end",flexDirection:"column"}}>
          <Button
            component={Link}
            to={`/products/${product.id}`}
            size="small"
            startIcon={<Eye />}
            sx={{
              textTransform: "none",
              color: "hsl(156,35%,35%)",
              transition: "all .8s ease",
              alignSelf:"flex-start",
              // margin:"5px 0"
            }}
          >
            View Details
          </Button>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "hsl(156,35%,35%)",
              color: "white",
              "&:hover": {
                backgroundColor: "hsl(156,35%,25%)",
              },
              // marginRight:"100px"
             
            }}
            size="small"
            className="w-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart fontSize="" className="mr-2 text-xl" />
            Add to Cart
          </Button>
        </CardActions>
      </CardContent>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {product.name} added to cart!
        </Alert>
      </Snackbar>
    </Card>
  );
}
