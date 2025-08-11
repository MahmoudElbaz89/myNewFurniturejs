import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    TextField,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { Lock as LockIcon } from "@mui/icons-material";
import { toast } from "sonner";
import { accounts } from "../data/accounts";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [auth, setAuth] = useState({
        email: "",
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
        const isAuthenticated =
            localStorage.getItem("isAuthenticated") ||
            sessionStorage.getItem("isAuthenticated");

        if (email && isAuthenticated) {
            setAuth({
                email,
                isLoggedIn: true,
            });
        }
    }, []);

    const validateField = (name, value) => {
        if (!value) {
            return `${name === "email" ? "Email" : "Password"} is required`;
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

        // Clear login error when user types
        if (loginError) {
            setLoginError("");
        }

        // Only validate if there's an error or if the field is being cleared
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

        // Check if there are any validation errors
        if (Object.values(newErrors).some((error) => error)) return;

        // Check if email exists in accounts
        const user = accounts.find(
            (account) => account.email === formData.email
        );
        if (!user) {
            setLoginError("Invalid email or password");
            return;
        }

        // Verify password
        if (user.password !== formData.password) {
            setLoginError("Invalid email or password");
            return;
        }

        // Save to storage (without password)
        const storage = formData.rememberMe ? localStorage : sessionStorage;
        storage.setItem("userEmail", formData.email);
        storage.setItem("isAuthenticated", "true");

        setAuth({
            email: formData.email,
            isLoggedIn: true,
        });

        toast.success("Successfully logged in!");
        const redirectPath =
            location.state?.from ||
            new URLSearchParams(location.search).get("redirect");
        navigate(redirectPath || "/");
    };

    const handleLogout = () => {
        // Clear all auth data from storage
        localStorage.removeItem("userEmail");
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("userEmail");
        sessionStorage.removeItem("isAuthenticated");

        setAuth({
            email: "",
            isLoggedIn: false,
        });

        toast.success("Successfully logged out!");
    };

    // If logged in, show welcome message
    if (auth.isLoggedIn) {
        return (
            <div className="flex-1 py-16 flex flex-col justify-center items-center bg-gradient-to-r from-furniture-cream to-furniture-warm">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Welcome <span className="text-furniture">Back!</span>
                    </h2>
                    <p className="mb-6 font-semibold">
                        You are signed in as:{" "}
                        <strong className="underline text-furniture">
                            {auth.email}
                        </strong>
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
        <div className="flex-1 flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-furniture/10">
                        <LockIcon className="h-6 w-6 text-furniture" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Or
                        <Link
                            to="/signup"
                            className="font-bold underline text-furniture hover:text-furniture-dark"
                        >
                            create a new account
                        </Link>
                    </p>
                    {loginError && (
                        <div className="mt-4 text-red-500 text-sm">
                            {loginError}
                        </div>
                    )}
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md space-y-4">
                        <div>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                label="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.email || !!loginError}
                                helperText={errors.email}
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "red",
                                        },
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                label="Password"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.password || !!loginError}
                                helperText={errors.password}
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "red",
                                        },
                                }}
                            />
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
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-furniture hover:bg-furniture-dark focus:outline-none "
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
