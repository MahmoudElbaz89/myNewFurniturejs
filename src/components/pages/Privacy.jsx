import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4 text-gray-700">
                Your privacy is important to us. This Privacy Policy outlines
                how we collect, use, and protect your personal information when
                you use our website.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">
                1. Information We Collect
            </h2>
            <p className="mb-4 text-gray-700">
                We may collect personal information such as your name, email
                address, and payment details when you register or make a
                purchase.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">
                2. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-700">
                Your information is used to provide and improve our services,
                process transactions, and communicate with you regarding your
                account or orders.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">
                3. Data Protection
            </h2>
            <p className="mb-4 text-gray-700">
                We take reasonable measures to protect your information from
                unauthorized access, disclosure, or misuse.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">
                4. Changes to Privacy Policy
            </h2>
            <p className="mb-4 text-gray-700">
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page, and your continued use of our
                website constitutes your acceptance of the updated policy.
            </p>
            <p className="mt-8 text-gray-600">
                If you have any questions about this Privacy Policy, please
                Contact us via our{" "}
                <Link to="/contact" className="text-furniture-green font-semibold">
                    contact page.
                </Link>
            </p>
        </div>
    );
}
