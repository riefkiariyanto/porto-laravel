import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";
import SupAdminLayout from "./SupAdminLayout";

export default function SignMethods({ methods }) {
    return (
        <SupAdminLayout>
            <Toaster position="top-right" />
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Sign-In Methods
                </h1>

                <div className="space-y-4">
                    {methods.map((method) => (
                        <MethodCard
                            key={method.id}
                            id={method.id}
                            method={method.method}
                            description={method.description}
                            enabled={method.enabled}
                        />
                    ))}
                </div>
            </div>
        </SupAdminLayout>
    );
}

function MethodCard({ id, method, description, enabled: initialEnabled }) {
    const [enabled, setEnabled] = useState(initialEnabled);
    const [loading, setLoading] = useState(false);

    const toggle = () => {
        const newState = !enabled;
        setEnabled(newState);
        setLoading(true);

        router.patch(
            route("superadmin.sign-methods.update", id),
            { enabled: newState },
            {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success(
                        `"${method}" has been ${
                            newState ? "enabled" : "disabled"
                        }.`
                    );
                },
                onFinish: () => {
                    setLoading(false);
                },
                onError: () => {
                    setLoading(false);
                    setEnabled(!newState); // rollback UI
                    toast.error(`Failed to update "${method}".`);
                },
            }
        );
    };

    return (
        <div className="p-4 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {method}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                </div>

                <button
                    onClick={toggle}
                    disabled={loading}
                    className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                        enabled ? "bg-green-500" : "bg-gray-400"
                    } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <div
                        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                            enabled ? "translate-x-8" : "translate-x-0"
                        }`}
                    />
                </button>
            </div>
        </div>
    );
}
