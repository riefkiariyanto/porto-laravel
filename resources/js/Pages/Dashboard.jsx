import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800 transform transition-transform hover:scale-100">
                        <div className="flex items-center space-x-4">
                            <CheckCircleIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    Welcome!
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    You're successfully logged in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
