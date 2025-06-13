import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const EnterIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 19 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 19}
        height={size || height || 22}
        {...otherProps}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd" d="M7.62491 3.75008L13.8748 10L7.62491 16.2499V11.25H0.125V8.75002H7.62491V3.75008Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6142 3.28456C13.7654 2.54191 12.6849 2.50009 11.3749 2.50009V0.000125064C11.4068 0.000125064 11.4394 9.49641e-05 11.4726 6.4268e-05C12.6743 -0.00104824 14.6536 -0.00288066 16.2604 1.40314C17.9233 2.85816 18.8748 5.50946 18.8748 10C18.8748 14.4905 17.9233 17.1418 16.2604 18.5969C14.6536 20.0029 12.6743 20.001 11.4726 19.9999C11.4394 19.9999 11.4068 19.9999 11.3749 19.9999V17.4999C12.6849 17.4999 13.7654 17.4581 14.6142 16.7154C15.4513 15.983 16.3748 14.2593 16.3748 10C16.3748 5.74065 15.4513 4.01701 14.6142 3.28456Z"
            fill="currentColor"
        />
    </svg>
);