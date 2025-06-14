import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const SearchIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 23}
        height={size || height || 24}
        {...otherProps}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.50073 16.5654C13.091 16.5654 16.0015 13.655 16.0015 10.0647C16.0015 6.47444 13.091 3.56396 9.50073 3.56396C5.91048 3.56396 3 6.47444 3 10.0647C3 13.655 5.91048 16.5654 9.50073 16.5654ZM9.50073 19.5654C12.0155 19.5654 14.302 18.5884 16.0015 16.9933C17.848 15.26 19.0015 12.7971 19.0015 10.0647C19.0015 4.81759 14.7478 0.563965 9.50073 0.563965C4.25362 0.563965 0 4.81759 0 10.0647C0 15.3118 4.25362 19.5654 9.50073 19.5654Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7399 15.2639L22.4978 22.0219L21.0836 23.4361L14.3257 16.6781L15.7399 15.2639Z"
            fill="currentColor"
        />
    </svg>
);