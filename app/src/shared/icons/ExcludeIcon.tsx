import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const ExcludeIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 62 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 62}
        height={size || height || 45}
        {...otherProps}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.7648 44.25H9.76481C-2.83746 40.3724 -2.59103 21.8606 9.26481 17.25C9.26481 5.65 16.2648 0.75 24.7648 0.75C33.2648 0.75 35.3428 4.25 37.2648 8.75C39.3428 7.25 45.3428 6.25 48.7648 8.75C53.2648 11.375 54.7648 17.25 52.7648 21.25C66.2648 23.75 62.2648 41.25 54.7648 44.25ZM32.8254 14.6893C32.2396 14.1036 31.2899 14.1036 30.7041 14.6893L21.1582 24.2353L23.2795 26.3566L30.2648 19.3713V37.25H33.2648V19.3713L40.25 26.3566L42.3714 24.2353L32.8254 14.6893Z"
            fill="currentColor"
        />
    </svg>
);