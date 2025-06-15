"use client";

import {type FC, type ChangeEvent, useState, useRef} from "react";

interface SliderProps {
    label: string;
    value?: number;
    onChange?: (value: number) => void;
}

export const Slider: FC<SliderProps> = ({label, value = 50, onChange}) => {
    const [internalValue, setInternalValue] = useState(value);
    const trackRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setInternalValue(newValue);
        onChange?.(newValue);
    };

    const getPercentPosition = () => (
        `${internalValue}%`
    );

    return (
        <div
            className="flex gap-[8px] bg-[#2F3E59] rounded-[20px] px-[24px] py-[10px] text-white w-full max-w-[224px]">
            <div className="text-[16px]">{label}</div>
            <div className="relative w-full flex" ref={trackRef}>
                {/* Текст рядом с ползунком */}


                {/* Слайдер */}
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={internalValue}
                    onChange={handleChange}
                    className="w-full h-[1px] bg-white appearance-none cursor-pointer my-[6px]
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-[11px]
            [&::-webkit-slider-thumb]:h-[11px]
            [&::-webkit-slider-thumb]:bg-navy
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border-none
            [&::-moz-range-thumb]:w-[11px]
            [&::-moz-range-thumb]:h-[11px]
            [&::-moz-range-thumb]:bg-navy
            [&::-moz-range-thumb]:rounded-full
          "
                />
                <span
                    className="absolute -bottom-[4px] text-[14px] transform -translate-x-1/2"
                    style={{left: getPercentPosition()}}
                >
          {internalValue}%
        </span>
            </div>
        </div>
    );
};
