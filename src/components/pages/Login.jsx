import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Typography,
    FormHelperText,
} from "@mui/material";
import { Lock as LockIcon } from "@mui/icons-material";
import { toast } from "sonner";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [auth, setAuth] = useState({
        email: localStorage.getItem("userEmail") || "",
        password: localStorage.getItem("userPassword") || "",
        isLoggedIn: false,
    });

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [loginError, setLoginError] = useState("");

    // Check if already logged in
    useEffect(() => {
        const email =
            localStorage.getItem("userEmail") ||
            sessionStorage.getItem("userEmail");
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

    const validateField = (name, value) => {
        if (!value)
            return `${name === "email" ? "Email" : "Password"} is required`;

        if (name === "email") {
            const emailRegex = /^[\w\-\.]+@([\w]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(value))
                return "Please enter a valid email address";
        }

        if (name === "password") {
            if (value.length < 6) {
                return "Password must be at least 6 characters";
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

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate fields
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (key !== "rememberMe") {
                newErrors[key] = validateField(key, formData[key]);
            }
        });
        setErrors(newErrors);

        if (!Object.values(newErrors).every((err) => !err)) return;

        // Save to storage
        if (formData.rememberMe) {
            localStorage.setItem("userEmail", formData.email);
            localStorage.setItem("userPassword", formData.password);
        } else {
            sessionStorage.setItem("userEmail", formData.email);
            sessionStorage.setItem("userPassword", formData.password);
        }

        setAuth({
            email: formData.email,
            password: formData.password,
            isLoggedIn: true,
        });

        toast.success("Successfully logged in!");
        const redirectPath =
            location.state?.from ||
            new URLSearchParams(location.search).get("redirect");
        navigate(redirectPath || "/");
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

    // If logged in
    if (auth.isLoggedIn) {
        return (
            <div className="h-96 py-16 flex flex-col justify-center items-center  bg-gradient-to-r from-furniture-cream to-furniture-warm">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Welcome <span className="text-furniture">Back!</span>
                    </h2>
                    <p className="mb-6  font-semibold">
                        You are signed in as:{" "}
                        <strong className="underline text-furniture">{auth.email}</strong>
                    </p>
                    <div className="space-y-4">
                        <button
                            onClick={() => navigate("/")}
                            className="w-full font-bold bg-furniture-warm hover:bg-[#2D6450] hover:text-white p-3 rounded-lg transition-all duration-300"
                        >
                            Go to Home
                        </button>
                        <button
                            onClick={handleLogout}
                            className="border-furniture border hover:bg-furniture-dark w-full p-3 rounded-lg text-furniture hover:text-white font-bold transition-all duration-300"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Login form
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
                    <p className="mt-2 text-gray-600">
                        Or{" "}
                        <Link
                            to="/signup"
                            className="font-bold underline text-furniture hover:text-furniture-dark"
                        >
                            create a new account
                        </Link>
                    </p>
                    {loginError && (
                        <Typography
                            color="error"
                            align="center"
                            className="mt-2"
                        >
                            {loginError}
                        </Typography>
                    )}
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.email}
                                required
                            />
                            {errors.email && (
                                <FormHelperText error>
                                    {errors.email}
                                </FormHelperText>
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
                                <FormHelperText error>
                                    {errors.password}
                                </FormHelperText>
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
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-furniture hover:bg-furniture-dark w-full text-white font-bold py-4 px-6 rounded-lg normal-case transition-all duration-200"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
