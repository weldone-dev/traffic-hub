"use client";

import {
    type FC,
    type InputHTMLAttributes,
    type KeyboardEvent,
    type ChangeEvent,
    forwardRef,
    useState,
    useLayoutEffect
} from "react";
import clsx from "clsx";
import {useRouter} from "next/navigation";
import {SearchIcon} from "@/shared/icons";
import {twMerge} from "tailwind-merge";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
}

export const Search: FC<IProps> = forwardRef<HTMLInputElement, IProps>((
    props,
    ref
) => {
    const {
        className,
        placeholder = "Поиск существующих трасс",
        value,
        onChange,
        onClick,
        onKeyDown,
        ...restProps
    } = props;

    const router = useRouter();
    const [inputValue, setInputValue] = useState(value || "");

    useLayoutEffect(() => {
        if (typeof value !== "undefined") {
            setInputValue(value);
        }
    }, [value]);

    const handleSearch = () => {
        const value = inputValue.trim();
        if (!value) return;
        router.push(`/search?query=${encodeURIComponent(value)}`);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDown) {
            return onKeyDown(e);
        }
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange?.(e);
    };

    return (
        <article className={twMerge("relative flex items-center bg-navy rounded-[16px] py-[24px] pl-[78px] pr-[20px]", className)}>
            <div
                className="absolute left-[20px] cursor-pointer"
                onClick={onClick || handleSearch}
            >
                <SearchIcon/>
            </div>
            <input
                ref={ref}
                type={"text"}
                value={inputValue}
                className={clsx(
                    "w-full bg-transparent outline-none text-[24px] font-normal text-white placeholder:text-gray-400",
                    {
                        "cursor-not-allowed": props.disabled,
                    }
                )}
                placeholder={placeholder}
                onChange={handlerOnChange}
                onKeyDown={handleKeyDown}
                {...restProps}
            />
        </article>
    );
});
