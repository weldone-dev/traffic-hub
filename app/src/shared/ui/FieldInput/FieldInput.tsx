"use client";
import {useState, forwardRef, type InputHTMLAttributes, type ReactNode, type FocusEvent} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";
import {EyeOffIcon} from "@/shared/icons";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
    error: string;
    mode?: "default" | "password";
}

export const FieldInput = forwardRef<HTMLInputElement, IProps>(
    (
        {
            label,
            className,
            error,
            startContent,
            endContent,
            onFocus,
            onBlur,
            mode = "default",
            type,
            ...props
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = (mode === "password");

        const containerClasses = twMerge(
            clsx(
                "relative flex bg-steel-blue items-center w-full pl-[65px] pr-[20px] py-[15px] rounded-[12px] transition-all duration-200 border text-white",
                {
                    "ring-1 ring-primary-blue border-primary-blue": isFocused && !error,
                    "border-red-500": error && !isFocused,
                    "ring-1 ring-red border-red": error,
                    "bg-gray-100 cursor-not-allowed": props.disabled,
                    "border-transparent": !error && !isFocused,
                }
            ),
            className
        );

        const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(e);
        }

        const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            onBlur?.(e);
        }

        return (
            <div className="w-full">
                <div className="flex flex-wrap items-baseline">
                    {label && (
                        <label className="block mb-[10px] text_base font-medium text-white/60">
                            {label}
                        </label>
                    )}

                    {error && (
                        <p className="text_base ml-[10px] text-red transition-all duration-200">
                            {error}
                        </p>
                    )}
                </div>

                <div className={containerClasses}>
                    {startContent && (
                        <div className="absolute left-[16px]">
                            {startContent}
                        </div>
                    )}
                    <input
                        ref={ref}
                        type={(isPassword
                            ? (showPassword ? "text" : "password")
                            : type
                        )}
                        className={clsx(
                            "w-full bg-transparent outline-none text_accent text-white placeholder:text-gray-400 ",
                            {
                                "cursor-not-allowed": props.disabled,
                            }
                        )}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        {...props}
                    />

                    {(isPassword
                            ? (
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="ml-[8px] text-white outline-none"
                                    tabIndex={-1}
                                >
                                    <EyeOffIcon
                                        className={clsx(
                                            "transition cursor-pointer",
                                            {
                                                "text-white/40": showPassword
                                            }
                                        )}
                                    />
                                </button>
                            )
                            : (
                                endContent
                                && (
                                    <div className="ml-[8px] text-white">
                                        {endContent}
                                    </div>
                                )
                            )
                    )}
                </div>
            </div>
        );
    }
);