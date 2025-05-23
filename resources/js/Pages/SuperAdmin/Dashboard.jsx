import React, { useState } from "react";
import Modal from "@/Components/Modal";
import { router } from "@inertiajs/react";
import SupAdminLayout from "./SupAdminLayout";
import {
    PencilSquareIcon,
    TrashIcon,
    UserIcon,
    ShieldCheckIcon,
    ClipboardDocumentListIcon,
    UsersIcon,
    TableCellsIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard({ users }) {
    const [editUser, setEditUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEdit = (user) => {
        setEditUser({
            ...user,
            email_verified: !!user.email_verified_at,
        });
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setEditUser(null);
        setShowEditModal(false);
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(`/superadmin/users/${id}`);
        }
    };

    const stats = {
        totalOrders: 125,
        totalTables: 24,
        activeAdmins: users.filter((u) => u.role === "admin").length,
    };

    return (
        <SupAdminLayout>
            <div className="px-4 sm:px-6 lg:px-1 space-y-4">
                {/* Welcome Box */}
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-md text-white">
                    <div className="flex items-center space-x-4">
                        <ShieldCheckIcon className="h-10 w-10" />
                        <div>
                            <h3 className="text-xl font-semibold">
                                Welcome, SuperAdmin
                            </h3>
                            <p className="text-sm opacity-90">
                                Here's an overview of registered users.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                        Other Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg shadow-md hover:bg-blue-100 dark:hover:bg-blue-800 transition">
                            <div className="flex items-center space-x-3">
                                <ClipboardDocumentListIcon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                                <h4 className="text-md font-bold text-blue-800 dark:text-blue-200">
                                    Total Orders
                                </h4>
                            </div>
                            <p className="text-3xl font-extrabold mt-2 text-blue-900 dark:text-blue-100">
                                {stats.totalOrders}
                            </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg shadow-md hover:bg-green-100 dark:hover:bg-green-800 transition">
                            <div className="flex items-center space-x-3">
                                <TableCellsIcon className="w-6 h-6 text-green-600 dark:text-green-300" />
                                <h4 className="text-md font-bold text-green-800 dark:text-green-200">
                                    Total Tables
                                </h4>
                            </div>
                            <p className="text-3xl font-extrabold mt-2 text-green-900 dark:text-green-100">
                                {stats.totalTables}
                            </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg shadow-md hover:bg-purple-100 dark:hover:bg-purple-800 transition">
                            <div className="flex items-center space-x-3">
                                <UsersIcon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                                <h4 className="text-md font-bold text-purple-800 dark:text-purple-200">
                                    Active Admins
                                </h4>
                            </div>
                            <p className="text-3xl font-extrabold mt-2 text-purple-900 dark:text-purple-100">
                                {stats.activeAdmins}
                            </p>
                        </div>
                    </div>
                </div>

                {/* User Management */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                        All Users
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.length === 0 && (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                                No users found.
                            </p>
                        )}
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            >
                                <div className="flex items-center space-x-3">
                                    <UserIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                                        {user.name}
                                    </h4>
                                </div>
                                <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                    <p className="mb-1">Email: {user.email}</p>
                                    <p className="mb-1">
                                        Role:{" "}
                                        <span className="capitalize text-blue-500 dark:text-blue-300">
                                            {user.role}
                                        </span>
                                    </p>
                                    <p>
                                        Status:{" "}
                                        {user.email_verified_at ? (
                                            <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300">
                                                Verified
                                            </span>
                                        ) : (
                                            <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-300">
                                                Unverified
                                            </span>
                                        )}
                                    </p>
                                    <p className="mb-1">Id: {user.id}</p>
                                </div>
                                <div className="mt-4 text-right space-x-2">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-xs font-medium mr-3"
                                    >
                                        <PencilSquareIcon className="w-5 h-5 inline-block mr-1" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-red-600 hover:text-red-800 dark:hover:text-red-400 text-xs font-medium"
                                    >
                                        <TrashIcon className="w-5 h-5 inline-block mr-1" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Edit User */}
                <Modal
                    show={showEditModal}
                    onClose={closeEditModal}
                    maxWidth="md"
                >
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                            Edit User
                        </h2>
                        {editUser && (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const dataToSend = {
                                        name: editUser.name,
                                        email: editUser.email,
                                        role: editUser.role,
                                        email_verified_at:
                                            editUser.email_verified
                                                ? new Date().toISOString()
                                                : null,
                                    };
                                    router.patch(
                                        `/superadmin/users/${editUser.id}`,
                                        dataToSend,
                                        {
                                            onSuccess: () => closeEditModal(),
                                        }
                                    );
                                }}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={editUser.name}
                                        onChange={(e) =>
                                            setEditUser({
                                                ...editUser,
                                                name: e.target.value,
                                            })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={editUser.email}
                                        onChange={(e) =>
                                            setEditUser({
                                                ...editUser,
                                                email_verified_at: e.target
                                                    .checked
                                                    ? new Date().toISOString()
                                                    : null,
                                            })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Role
                                    </label>
                                    <select
                                        value={editUser.role}
                                        onChange={(e) =>
                                            setEditUser({
                                                ...editUser,
                                                role: e.target.value,
                                            })
                                        }
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                        <option value="superadmin">
                                            SuperAdmin
                                        </option>
                                    </select>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        id="email_verified"
                                        type="checkbox"
                                        checked={editUser.email_verified}
                                        onChange={(e) =>
                                            setEditUser({
                                                ...editUser,
                                                email_verified:
                                                    e.target.checked,
                                            })
                                        }
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="email_verified"
                                        className="block text-sm text-gray-700 dark:text-gray-300 select-none"
                                    >
                                        Email Verified
                                    </label>
                                </div>
                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 transition ease-in-out duration-150 text-sm"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </Modal>
            </div>
        </SupAdminLayout>
    );
}
