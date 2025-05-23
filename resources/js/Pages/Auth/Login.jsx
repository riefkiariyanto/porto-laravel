import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Mail, Lock } from "lucide-react";
import PageTransition from "@/Components/PageTransition";

export default function Login({ status, canResetPassword, googleEnabled }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    console.log(errors);
    return (
        <GuestLayout>
            <Head title="Log in" />
            <PageTransition keyProp="login">
                {/* Konten halaman login */}
            </PageTransition>
            <div className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 md:grid md:grid-cols-2">
                {/* LEFT PANEL - LOGIN FORM */}
                <div className="px-6 py-10 sm:px-10 lg:px-14">
                    <h2 className="text-center text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                        Sign in to your account
                    </h2>

                    {status && (
                        <div className="mb-4 rounded-md bg-green-100 p-3 text-sm font-medium text-green-700">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full pl-10"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full pl-10"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                    Remember me
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <div>
                            <PrimaryButton
                                className="w-full justify-center transition duration-300 ease-in-out hover:bg-indigo-700 dark:hover:bg-indigo-600"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>
                        {googleEnabled ? (
                            <div>
                                <a
                                    href="/auth/google"
                                    className="flex items-center justify-center w-full gap-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 py-2 transition"
                                >
                                    <img
                                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        alt="Google"
                                        className="w-5 h-5"
                                    />
                                    <span className="text-sm font-medium">
                                        Continue with Google
                                    </span>
                                </a>
                            </div>
                        ) : null}
                    </form>
                </div>

                {/* RIGHT PANEL - WELCOME MESSAGE + REGISTER LINK */}
                <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-10 py-16 text-left flex-col justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                            Welcome Back!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                            Log in to access your account and manage your
                            projects.
                        </p>
                        <Link
                            href={route("register")}
                            className="inline-block mt-4 px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
                        >
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
