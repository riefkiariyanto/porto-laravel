import { useState } from "react";
import { usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import {
    Home,
    Utensils,
    Table2,
    ReceiptText,
    LogOut,
    Menu,
    X,
} from "lucide-react";

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    23;
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-800 p-3 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-6 relative">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between mb-1">
                <ApplicationLogo className="h-10" />
                <button
                    onClick={toggleSidebar}
                    className="text-white focus:outline-none"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`z-40 lg:z-20 fixed lg:static top-0 left-0 h-full lg:h-screen bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-[50vw] sm:w-48 lg:w-[14rem] lg:mr-1 transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >
                <div className="flex flex-col justify-between h-full">
                    {/* Navigation */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="hidden lg:flex items-center justify-center w-full py-2 mb-1 border-b border-gray-200 dark:border-gray-700">
                            <ApplicationLogo className="h-11" />
                        </div>

                        <nav className="space-y-3 text-sm">
                            <NavItem
                                href={route("dashboard")}
                                icon={<Home />}
                                label="Dashboard"
                            />
                            <NavItem
                                href="#"
                                icon={<Utensils />}
                                label="Menu"
                            />
                            <NavItem href="#" icon={<Table2 />} label="Table" />
                            <NavItem
                                href="#"
                                icon={<ReceiptText />}
                                label="Orders"
                            />
                        </nav>
                    </div>

                    {/* User Info (bottom) */}
                    <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                        <div className="hidden lg:flex w-7 h-7 rounded-full bg-indigo-500 text-white items-center justify-center font-bold">
                            {auth.user.name.charAt(0)}
                        </div>
                        <Link
                            href={route("profile.edit")}
                            className="flex-1 group cursor-pointer"
                            title="Edit Profile"
                        >
                            <div className="text-xs font-medium text-gray-800 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition duration-200">
                                {auth.user.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition duration-200">
                                Admin
                            </div>
                        </Link>

                        <Link
                            method="post"
                            href={route("logout")}
                            className="text-white hover:text-red-700 transition-all duration-200 ease-in-out"
                            title="Logout"
                        >
                            <LogOut className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full space-y-4">
                {/* Header di luar card */}
                <div className="text-white text-xl lg:text-2xl font-bold">
                    {header}
                </div>

                {/* Card untuk konten */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

// NavItem component
function NavItem({ href, icon, label }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-all duration-300"
        >
            <span className="w-5 h-5 text-indigo-600 dark:text-indigo-400">
                {icon}
            </span>
            <span>{label}</span>
        </Link>
    );
}
