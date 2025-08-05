import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Lock as LockIcon, Person as PersonIcon } from "@mui/icons-material";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "rememberMe") {
        // Skip rememberMe checkbox
        newErrors[key] = validateField(key, formData[key]);
      }
    });

    setErrors(newErrors);

    // Check if there are no errors
    if (Object.values(newErrors).every((error) => !error)) {
      console.log("Login submitted:", formData);
      // Proceed with form submission
    }
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

          <div className="flex items-center justify-between">
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
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-furniture hover:text-furniture-dark"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="bg-furniture hover:bg-furniture-dark"
              size="large"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
