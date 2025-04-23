import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import { Link, usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-800 flex flex-col sm:flex-row items-start p-6 gap-6">
            {/* Sidebar with neumorphism effect and zoom on hover */}
            <aside className="w-full sm:w-64 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col items-center mb-8">
                    <ApplicationLogo className="h-12" />
                    <span className="mt-3 text-lg text-gray-600 dark:text-gray-300 font-semibold">
                        {auth.user.name}
                    </span>
                </div>
                <nav className="space-y-4 text-sm">
                    <Link
                        href={route("dashboard")}
                        className="flex items-center px-6 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-all duration-300 transform hover:translate-x-2"
                    >
                        <i className="fas fa-tachometer-alt mr-3 text-indigo-600 dark:text-indigo-400"></i>{" "}
                        Dashboard
                    </Link>
                </nav>

                {/* Dropdown menu with adjusted position and custom names */}
                <div className="mt-8 relative w-full sm:w-auto">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-300">
                                Menu
                            </button>
                        </Dropdown.Trigger>

                        {/* Positioned below the dropdown button */}
                        <Dropdown.Content className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <Dropdown.Link
                                href={route("profile.edit")}
                                className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition duration-300"
                            >
                                Edit Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                method="post"
                                href={route("logout")}
                                className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition duration-300"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </aside>

            {/* Main content area with neumorphism card design and zoom on hover */}
            <div className="flex-1 w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h2 className="text-2xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        {header}
                    </h2>
                </header>

                <main>{children}</main>
            </div>
        </div>
    );
}
