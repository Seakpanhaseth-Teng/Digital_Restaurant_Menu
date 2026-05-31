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

    <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3x1 bg-white p-6 shadow-xl dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold dark:text-white">
                Settings
            </h2>

            <bottom
                onClick={onClose}
                className="text-gray-500"
            >
                X
            </bottom>
        </div>

        <div  className="space-y-6">
            <div className="flex items-center justify-between">
                <span className="dark:text-white">Manager Workspace</span>

                <input
                    type="checkbox"
                    checked={isAdminMode}
                    onChange={() => setIsAdminMode((prev) => !prev)}
                />
            </div>
        </div>
    </div>
    );
}