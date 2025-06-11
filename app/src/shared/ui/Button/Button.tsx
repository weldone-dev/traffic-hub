"use client";
import type {ButtonHTMLAttributes, FC, MouseEvent, ReactNode} from "react";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    color?: "primary-blue" | "dark-slate" | "emerald";
    startContent?: ReactNode;
}

export const Button: FC<IProps> = (
    {
        className = "",
        color = "primary-blue",
        startContent,
        children,
        onClick,
        ...props
    }
) => {
    const {disabled} = props;
    const [pressed, setPressed] = useState(false);
    const baseClasses = clsx(
        "px-[20px] py-[22px] rounded-[15px] flex justify-center items-center gap-[10px] text-white text-[24px] font-bold leading-[1]",
        "tracking-[0.029px] cursor-pointer transition-all duration-200 hover:brightness-80 disabled:brightness-50 disabled:cursor-not-allowed"
    );
    const colorClasses = {
        "primary-blue": "bg-[var(--color-primary-blue)]",
        "dark-slate": "bg-[var(--color-dark-slate)]",
        "emerald": "bg-[var(--color-emerald)]",
    }[color];

    const visualEffect =  pressed ? "scale-[0.97]" : "";
    const combinedClasses = twMerge(baseClasses, colorClasses, visualEffect, className);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        setPressed(true);
        setTimeout(() => setPressed(false), 100);
        onClick?.(e);
    };

    return (
        <button className={combinedClasses} {...props} onClick={handleClick}>
            {startContent && <span className={""}>{startContent}</span>}
            {children}
        </button>
    );
}