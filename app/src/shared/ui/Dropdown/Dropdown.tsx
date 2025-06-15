"use client";
import {useState, useRef, useEffect, type FC} from "react";
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

type Option = {
    label: string;
    value: string;
};

interface IProps {
    label?: string;
    options: Option[];
    value: string;
    onSelect?: (value: string) => void;
    className?: string;
}

export const Dropdown: FC<IProps> = (
    {
        label,
        options,
        value,
        onSelect,
        className,
    }
) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedLabel = options.find(o => o.value === value)?.label || "";

    const handleSelect = (val: string) => {
        setIsOpen(false);
        onSelect?.(val);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className={twMerge("w-full relative text-white", className)}>
            {label && (
                <label className="block mb-[10px] text_base font-medium text-white/60">
                    {label}
                </label>
            )}

            <button
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
                className="w-full bg-steel-blue px-[20px] py-[15px] rounded-[12px] border border-transparent flex justify-between items-center transition-all duration-200"
            >
                <span className="truncate">{selectedLabel}</span>
                <svg
                    className={`w-[18px] h-[18px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                >
                    <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {isOpen && (
                <ul className="absolute top-full left-0 w-full mt-[5px] bg-steel-blue rounded-[12px] shadow-lg z-20 overflow-hidden">
                    {options.map(opt => (
                        <li
                            key={opt.value}
                            onClick={() => handleSelect(opt.value)}
                            className={clsx(
                                "px-[20px] py-[12px] hover:bg-slate-600 cursor-pointer transition-colors duration-150",
                                {
                                    "bg-slate-600": opt.value === value,
                                }
                            )}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
