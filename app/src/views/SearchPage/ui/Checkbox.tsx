'use client';

import {type FC, useState} from 'react';
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

interface IProps {
    label: string;
    checked?: boolean;
    onChange?: (value: boolean) => void;
}

export const Checkbox: FC<IProps> = (
    {
        label,
        checked = false,
        onChange
    }
) => {
    const [isChecked, setIsChecked] = useState(checked);

    const toggle = () => {
        setIsChecked(!isChecked);
        onChange?.(!isChecked);
    };

    return (
        <button
            onClick={toggle}
            className="flex items-center justify-between w-full pl-[24px] pr-[14px] py-[10px] bg-[#2F3E59] rounded-[12px] max-w-[224px] text-white text-[16px] cursor-pointer"
        >
            <span>{label}</span>
            <span className={twMerge("w-[11px] h-[11px] bg-navy", isChecked && "bg-white")}/>
        </button>
    );
}
