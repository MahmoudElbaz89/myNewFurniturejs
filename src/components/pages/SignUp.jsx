import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { accounts } from "../data/accounts";
import {
  TextField,
  Checkbox,
  FormHelperText,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import {
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  Email,
} from "@mui/icons-material";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[\p{L}\p{M}\s'-]{2,50}$/u;

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) { 
      newErrors.firstName = "first name is not valid";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
        newErrors.lastName = "last name is not valid";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[\w\-\.]+@([\w]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (accounts.some((account) => account.email === formData.email)) {
        newErrors.email = "Email already exists";
      }
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{10,20}$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          "Password must be 10-20 characters long and include letters, numbers, and special characters";
      }
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      accounts.push(formData);
      setTimeout(() => {
          setIsSubmitting(false);
          navigate("/login");
      }, 1000);
    }
  };
  return (
      <div className="min-h-96 flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
              <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-furniture/10">
                      <LockIcon className="h-6 w-6 text-furniture" />
                  </div>
                  <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                      Create your account
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link
                          to="/login"
                          className="font-medium text-furniture hover:text-furniture-dark"
                      >
                          Sign in
                      </Link>
                  </p>
              </div>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <TextField
                                  fullWidth
                                  variant="outlined"
                                  label="First Name"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                  error={!!errors.firstName}
                                  helperText={errors.firstName}
                              />
                          </div>
                          <div>
                              <TextField
                                  fullWidth
                                  variant="outlined"
                                  label="Last Name"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                  error={!!errors.lastName}
                                  helperText={errors.lastName}
                              />
                          </div>
                      </div>

                      <div>
                          <TextField
                              fullWidth
                              variant="outlined"
                              label="Email address"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              error={!!errors.email}
                              helperText={errors.email}
                              InputProps={{
                                  startAdornment: (
                                      <InputAdornment position="start">
                                          <Email />
                                      </InputAdornment>
                                  ),
                              }}
                          />
                      </div>
                      {/* Password */}
                      <div>
                          <TextField
                              fullWidth
                              variant="outlined"
                              name="password"
                              label="Password"
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={handleChange}
                              error={!!errors.password}
                              helperText={
                                  errors.password || "At least 10 characters"
                              }
                              InputProps={{
                                  startAdornment: (
                                      <InputAdornment position="start">
                                          <LockIcon />
                                      </InputAdornment>
                                  ),
                                  endAdornment: (
                                      <InputAdornment position="end">
                                          <IconButton
                                              onClick={() =>
                                                  setShowPassword(!showPassword)
                                              }
                                              edge="end"
                                          >
                                              {showPassword ? (
                                                  <VisibilityOff />
                                              ) : (
                                                  <Visibility />
                                              )}
                                          </IconButton>
                                      </InputAdornment>
                                  ),
                              }}
                          />
                      </div>

                      <div>
                          {/* Confirm Password */}
                          <TextField
                              label="Confirm Password"
                              name="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              fullWidth
                              error={!!errors.confirmPassword}
                              helperText={errors.confirmPassword}
                              InputProps={{
                                  startAdornment: (
                                      <InputAdornment position="start">
                                          <LockIcon />
                                      </InputAdornment>
                                  ),
                                  endAdornment: (
                                      <InputAdornment position="end">
                                          <IconButton
                                              onClick={() =>
                                                  setShowConfirmPassword(
                                                      (prev) => !prev
                                                  )
                                              }
                                          >
                                              {showConfirmPassword ? (
                                                  <VisibilityOff />
                                              ) : (
                                                  <Visibility />
                                              )}
                                          </IconButton>
                                      </InputAdornment>
                                  ),
                              }}
                          />
                      </div>
                  </div>

                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                          <Checkbox
                              name="termsAccepted"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                              color="primary"
                          />
                      </div>
                      <div className="ml-3 text-sm">
                          <Typography
                              variant="body2"
                              color={
                                  errors.termsAccepted
                                      ? "error"
                                      : "textSecondary"
                              }
                          >
                              I agree to the{" "}
                              <Link
                                  to="/terms"
                                  className="text-furniture hover:underline"
                              >
                                  Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link
                                  to="/privacy"
                                  className="text-furniture hover:underline"
                              >
                                  Privacy Policy
                              </Link>
                          </Typography>
                          {errors.termsAccepted && (
                              <FormHelperText error>
                                  {errors.termsAccepted}
                              </FormHelperText>
                          )}
                      </div>
                  </div>

                  <div>
                      <button
                          type="submit"
                          fullWidth
                          className="bg-furniture hover:bg-furniture-dark w-full text-white font-bold py-4 px-6 rounded-lg normal-case transition-all duration-200 focus:outline-none"
                          size="large"
                          startIcon={
                              isSubmitting ? (
                                  <CircularProgress size={20} color="inherit" />
                              ) : null
                          }
                      >
                          {isSubmitting
                              ? "Creating Account..."
                              : "Create Account"}
                      </button>
                  </div>
              </form>
          </div>
      </div>
  );
}
