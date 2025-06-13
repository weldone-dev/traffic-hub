"use client";

import {type ElementType, type FC, useState} from "react";
import clsx from "clsx";

interface IProps {
    iconName: string;
    IconComponent: ElementType;
}

export const IconItem: FC<IProps> = ({iconName, IconComponent}) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        setIsCopied(true);
        await navigator.clipboard.writeText(`<${iconName} />`);
        setIsCopied(false)
    };

    return (
        <div
            onClick={handleCopy}
            className={clsx(
                "flex flex-col items-center p-4 border rounded-lg transition-all cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800",
                isCopied
                    ? "bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700"
                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            )}
        >
            <div className={clsx(
                "p-3 rounded-full mb-2 transition-colors",
                isCopied
                    ? "bg-green-100 dark:bg-green-800/50"
                    : "bg-gray-100 dark:bg-gray-700"
            )}>
                <IconComponent className={clsx(
                    "w-6 h-6 transition-colors",
                    isCopied
                        ? "text-green-600 dark:text-green-400"
                        : "text-gray-800 dark:text-gray-200"
                )}/>
            </div>
            <div className={clsx(
                "text-sm font-medium transition-colors",
                isCopied
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-700 dark:text-gray-300"
            )}>
                {isCopied
                    ? (
                        <div className="block text-xs text-center mt-1 text-green-500 dark:text-green-400">
                            Скопировано!
                        </div>
                    )
                    : (`<${iconName} />`)
                }
            </div>
        </div>
    );
};