import React from "react";
import { Link } from "react-router-dom";

export default function Terms() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4 text-gray-700">
                Welcome to our website! These Terms of Service govern your use
                of our site and services. By accessing or using our website, you
                agree to comply with these terms.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">
                1. Use of Our Service
            </h2>
            <p className="mb-4 text-gray-700">
                You agree to use our services only for lawful purposes and in a
                manner that does not infringe the rights of, restrict, or
                inhibit anyone else's use and enjoyment of the website.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">
                2. Account Registration
            </h2>
            <p className="mb-4 text-gray-700">
                You are responsible for maintaining the confidentiality of your
                account information and for all activities that occur under your
                account.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">
                3. Changes to Terms
            </h2>
            <p className="mb-4 text-gray-700">
                We reserve the right to modify these terms at any time. Changes
                will be posted on this page, and continued use of our services
                constitutes acceptance of the updated terms.
            </p>
            <p className="mt-8 text-gray-600">
                If you have any questions about these Terms, please Contact us
                via our{" "}
                <Link
                    to="/contact"
                    className="text-furniture-green font-semibold"
                >
                    contact page.
                </Link>
            </p>
        </div>
    );
}
