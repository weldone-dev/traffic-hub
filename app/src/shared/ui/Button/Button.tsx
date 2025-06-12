"use client";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";
import type {
    ComponentPropsWithoutRef,
    ElementType,
    MouseEvent,
    ReactNode
} from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
    as?: E;
    className?: string;
    color?: "primary-blue" | "dark-slate" | "emerald";
    startContent?: ReactNode;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps>;

export function Button<E extends ElementType = "button">(props: ButtonProps<E>) {
    const {
        as,
        className = "",
        color = "primary-blue",
        startContent,
        children,
        onClick,
        ...otherProps
    } = props;

    const [pressed, setPressed] = useState(false);
    const Tag = as || "button";

    const baseClasses = clsx(
        "px-[20px] py-[22px] rounded-[15px] flex justify-center items-center gap-[10px] text-white text-[24px] font-bold leading-[1]",
        "tracking-[0.029px] cursor-pointer transition-all duration-200 hover:brightness-80 disabled:brightness-50 disabled:cursor-not-allowed"
    );

    const colorClasses = {
        "primary-blue": "bg-[var(--color-primary-blue)]",
        "dark-slate": "bg-[var(--color-dark-slate)]",
        "emerald": "bg-[var(--color-emerald)]",
    }[color];

    const visualEffect = pressed ? "scale-[0.97]" : "";
    const combinedClasses = twMerge(baseClasses, colorClasses, visualEffect, className);

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        const disabled = (Tag === "button" ? props.disabled : false);
        if (disabled) return;
        setPressed(true);
        setTimeout(() => setPressed(false), 100);
        onClick?.(e);
    };
    const currentProps = Tag === "button" ? {
        ...otherProps,
        disabled: props.disabled,
        onClick: handleClick
    } : {
        ...otherProps,
        onClick: handleClick
    };

    return (
        <Tag className={combinedClasses} {...currentProps}>
            {startContent && <span>{startContent}</span>}
            {children}
        </Tag>
    );
}