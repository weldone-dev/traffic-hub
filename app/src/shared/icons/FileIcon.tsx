import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const FileIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 44 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 44}
        height={size || height || 51}
        {...otherProps}
    >
        <path
            fillRule="evenodd" clipRule="evenodd"
            d="M27.75 0.5H3.75C2.09315 0.5 0.75 1.84315 0.75 3.5V47.5C0.75 49.1569 2.09315 50.5 3.75 50.5H40.25C41.9069 50.5 43.25 49.1569 43.25 47.5V16H30.75C29.0931 16 27.75 14.6569 27.75 13V0.5Z"
            fill="#263C5C"
        />
        <path
            d="M43.25 16L27.75 0.5V13C27.75 14.6569 29.0931 16 30.75 16H43.25Z"
            fill="#5377AC"
        />
    </svg>
);