import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import PageTransition from "@/Components/PageTransition";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <PageTransition keyProp="register">
                {/* Semua konten register di sini */}
            </PageTransition>
            <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-900 md:grid md:grid-cols-2">
                {/* LEFT PANEL - WELCOME */}
                <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-10 py-16 text-center flex-col justify-center">
                    <div>
                        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                            Welcome!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                            Already have an account? Log in and continue
                            managing your projects.
                        </p>
                        <Link
                            href={route("login")}
                            className="inline-block mt-4 px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
                        >
                            Log in
                        </Link>
                    </div>
                </div>

                {/* RIGHT PANEL - REGISTER FORM */}
                <div className="px-6 py-10 sm:px-10 lg:px-14">
                    <form onSubmit={submit} className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                            Create an Account
                        </h2>

                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />
                            <TextInput
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <PrimaryButton
                                className="w-full justify-center"
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
