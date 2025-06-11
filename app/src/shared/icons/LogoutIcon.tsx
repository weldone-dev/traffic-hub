import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const LogoutIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 25}
        height={size || height || 26}
        {...otherProps}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6252 6.75008L16.8751 13L10.6252 19.2499V14.25H3.12524V11.75H10.6252V6.75008Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6144 6.28456C16.7657 5.54191 15.6851 5.50009 14.3751 5.50009V3.00013C14.4071 3.00013 14.4396 3.00009 14.4728 3.00006C15.6746 2.99895 17.6538 2.99712 19.2607 4.40314C20.9236 5.85816 21.875 8.50946 21.875 13C21.875 17.4905 20.9236 20.1418 19.2607 21.5969C17.6538 23.0029 15.6746 23.001 14.4728 22.9999C14.4396 22.9999 14.4071 22.9999 14.3751 22.9999V20.4999C15.6851 20.4999 16.7657 20.4581 17.6144 19.7154C18.4515 18.983 19.375 17.2593 19.375 13C19.375 8.74065 18.4515 7.01701 17.6144 6.28456Z"
            fill="currentColor"
        />
    </svg>
);