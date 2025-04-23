import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-center items-center py-6 px-4">
            <div className="w-full max-w-5xl bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                {children}
            </div>
        </div>
    );
}
