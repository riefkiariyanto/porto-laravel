import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});
    const [cooldown, setCooldown] = useState(0);

    // Ambil waktu dari localStorage saat pertama kali load
    useEffect(() => {
        const cooldownExpiry = localStorage.getItem("cooldownExpiry");
        if (cooldownExpiry) {
            const remaining = Math.floor((+cooldownExpiry - Date.now()) / 1000);
            if (remaining > 0) {
                setCooldown(remaining);
            } else {
                localStorage.removeItem("cooldownExpiry");
            }
        }
    }, []);

    // Timer countdown
    useEffect(() => {
        if (cooldown > 0) {
            const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [cooldown]);

    const submit = (e) => {
        e.preventDefault();
        post(route("verification.send"), {
            onSuccess: () => {
                const expiry = Date.now() + 30 * 1000; // 60 detik
                localStorage.setItem("cooldownExpiry", expiry.toString());
                setCooldown(30);
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
            <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <Head title="Email Verification" />

                <div className="text-sm text-gray-600 dark:text-gray-400">
                    Thanks for signing up! Please verify your email address by
                    clicking the link in your email. If you didn't receive it,
                    we can send another.
                </div>

                {status === "verification-link-sent" && (
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        A new verification link has been sent to your email.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-between">
                        <PrimaryButton disabled={processing || cooldown > 0}>
                            {cooldown > 0
                                ? `Resend in ${cooldown}s`
                                : "Resend Verification Email"}
                        </PrimaryButton>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
