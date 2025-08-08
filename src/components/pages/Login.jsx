import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Lock as LockIcon, Person as PersonIcon } from "@mui/icons-material";
import { accounts } from "../data/accounts";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  // Load saved credentials on component mount
  useEffect(() => {
    // Check localStorage first (remember me was checked)
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (savedEmail && savedPassword) {
      setFormData((prev) => ({
        ...prev,
        username: savedEmail,
        password: savedPassword,
        rememberMe: true,
      }));
    } else {
      // Check sessionStorage (remember me was not checked)
      const sessionEmail = sessionStorage.getItem("userEmail");
      const sessionPassword = sessionStorage.getItem("userPassword");

      if (sessionEmail && sessionPassword) {
        setFormData((prev) => ({
          ...prev,
          username: sessionEmail,
          password: sessionPassword,
          rememberMe: false,
        }));
      }
    }
  }, []);

  const validateField = (name, value) => {
    if (!value)
      return `${name === "username" ? "Email" : "Password"} is required`;

    if (name === "username") {
      const emailRegex = /^[\w\-\.]+@([\w]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
    }

    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{10,20}$/;
      if (!passwordRegex.test(value)) {
        return "Password must be 10-20 characters long and include letters, numbers, and special characters";
      }
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Only validate if there's an existing error or if the field is being cleared
    if (errors[name] || !value) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, newValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields first
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "rememberMe") {
        // Skip rememberMe checkbox
        newErrors[key] = validateField(key, formData[key]);
      }
    });

    setErrors(newErrors);

    // If there are validation errors, don't proceed with login
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    try {
      // Mock login - replace with your actual API call
      const account = accounts.find(
        (acc) =>
          acc.email === formData.username && acc.password === formData.password
      );

      if (account) {
        // Store the token based on "Remember me" selection
        if (formData.rememberMe) {
          localStorage.setItem("authToken", "dummy-token"); // Replace with actual token
          localStorage.setItem("userEmail", formData.username);
          localStorage.setItem("userPassword", formData.password);
        } else {
          sessionStorage.setItem("authToken", "dummy-token"); // Replace with actual token
          sessionStorage.setItem("userEmail", formData.username);
          sessionStorage.setItem("userPassword", formData.password);
        }

        setLoginError("");
        toast.success("Login successful!");

        const redirectPath = new URLSearchParams(location.search).get(
          "redirect"
        );
        navigate(redirectPath || "/");
      } else {
        setLoginError("Invalid email or password");
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login. Please try again.");
      toast.error("Login failed. Please try again.");
    }
    console.log(formData, accounts);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-furniture/10">
            <LockIcon className="h-6 w-6 text-furniture" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link
              to="/signup"
              className="font-medium text-furniture hover:text-furniture-dark"
            >
              create a new account
            </Link>
          </p>
          {loginError && (
            <Typography color="error" align="center" className="mt-2">
              {loginError}
            </Typography>
          )}
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.username}
                required
              />
              {errors.username && (
                <FormHelperText error>{errors.username}</FormHelperText>
              )}
            </div>
            <div>
              <TextField
                fullWidth
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.password}
                required
              />
              {errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </div>
          </div>

          <div className="">
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember me"
            />
          </div>

          <div>
            <button
              type="submit"
              fullWidth
              className="bg-furniture hover:bg-furniture-dark w-full text-white font-bold py-2 px-6 rounded-lg normal-case"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
