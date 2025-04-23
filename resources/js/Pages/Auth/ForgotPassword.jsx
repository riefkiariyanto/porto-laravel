import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {/* LEFT PANEL (INFO) */}
            <div className="hidden sm:flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-700 sm:w-1/2 px-10 py-12">
                <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                    Forgot Password
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    No problem. Enter your email and we’ll send you a reset
                    link.
                </p>
            </div>

            {/* RIGHT PANEL (FORM) */}
            <div className="w-full sm:w-1/2 px-6 py-10 sm:px-10 lg:px-14 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out">
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400 text-center">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                        >
                            Email Address
                        </label>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="flex justify-center">
                        <PrimaryButton
                            disabled={processing}
                            className="px-6 py-2 font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-indigo-700 dark:hover:bg-indigo-600"
                        >
                            Send Reset Link
                        </PrimaryButton>
                    </div>

                    <div className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
                        <Link
                            href={route("login")}
                            className="text-indigo-600 hover:underline dark:text-indigo-400"
                        >
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
