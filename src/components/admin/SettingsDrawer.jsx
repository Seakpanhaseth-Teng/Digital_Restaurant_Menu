import React from 'react';

export default function SettingsDrawer({
    isOpen,
    onClose,
    darkMode,
    setDarkMode,
    isAdminMode,
    setIsAdminMode,
}) {
    if (!isOpen) return null;

    return (

    <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white p-6 shadow-xl dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold dark:text-white">
                Settings
            </h2>

            <button
                onClick={onClose}
                className="text-gray-500"
            >
                X
            </button>
        </div>

        <div  className="space-y-6">
            <div className="flex items-center justify-between">
                <span className="dark:text-white">Manager Workspace</span>

                <input
                    type="checkbox"
                    checked={isAdminMode}
                    onChange={() => setIsAdminMode((prev) => !prev)}
                />

                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode((prev) => !prev)}
                />

                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={onClose}
                />
            </div>
        </div>
    </div>
    );
}