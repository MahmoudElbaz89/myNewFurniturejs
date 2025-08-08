import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    email: localStorage.getItem("userEmail") || "",
    password: localStorage.getItem("userPassword") || "",
    isLoggedIn: false,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Check if user is logged in on component mount
  useEffect(() => {
    const email =
      localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail");
    const password =
      localStorage.getItem("userPassword") ||
      sessionStorage.getItem("userPassword");

    if (email && password) {
      setAuth({
        email,
        password,
        isLoggedIn: true,
      });
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // In a real app, you would validate credentials with your backend
    // For demo, we'll just save the credentials
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPassword", formData.password);

    setAuth({
      email: formData.email,
      password: formData.password,
      isLoggedIn: true,
    });

    toast.success("Successfully logged in!");
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userPassword");

    setAuth({
      email: "",
      password: "",
      isLoggedIn: false,
    });

    toast.success("Successfully logged out!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // If user is logged in, show welcome message
  if (auth.isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">
            Welcome <span className="text-furniture ">Back!</span>
          </h2>
          <p className="mb-6">
            You are signed in as: <strong className="underline">{auth.email}</strong>
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigate("/")}
              className="bg-furniture-dark hover:bg-furniture w-full p-2 rounded-lg text-white font-bold"
            >
              Go to Home
            </button>
            <button
              onClick={handleLogout}
              className="border-furniture border hover:bg-furniture-dark w-full p-2 rounded-lg text-furniture hover:text-white hover:border-furniture-dark font-bold"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show login form if not logged in
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              className="mb-4"
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              variant="outlined"
              className="mb-6"
            />
          </div>
          <button
            type="submit"
            className="bg-furniture hover:bg-furniture-dark w-full p-2 rounded-lg text-white font-bold"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-furniture hover:underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
