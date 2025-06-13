import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const PersonIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 19}
        height={size || height || 24}
        {...otherProps}
    >
        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M2.7854 19.75H16.212C16.1432 19.0007 15.9499 18.0737 15.4077 17.2266C14.6335 16.0168 12.9949 14.75 9.25001 14.75C5.78341 14.75 4.26939 15.9947 3.54498 17.202C3.03206 18.0569 2.84997 18.9942 2.7854 19.75ZM1.83 16.173C2.9806 14.2553 5.21661 12.75 9.25001 12.75C13.5051 12.75 15.8665 14.2332 17.0923 16.1484C18.2506 17.9583 18.2502 19.9522 18.25 20.7237L18.25 21.75H0.750049L0.75001 20.75C0.75001 20.7413 0.750007 20.7323 0.750005 20.7232C0.749817 19.9543 0.749332 17.9741 1.83 16.173Z" 
            fill="currentColor"
        />
        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M9.25001 8.25C10.9069 8.25 12.25 6.90685 12.25 5.25C12.25 3.59315 10.9069 2.25 9.25001 2.25C7.59316 2.25 6.25001 3.59315 6.25001 5.25C6.25001 6.90685 7.59316 8.25 9.25001 8.25ZM9.25001 10.25C12.0114 10.25 14.25 8.01142 14.25 5.25C14.25 2.48858 12.0114 0.25 9.25001 0.25C6.48859 0.25 4.25001 2.48858 4.25001 5.25C4.25001 8.01142 6.48859 10.25 9.25001 10.25Z" 
            fill="currentColor"
        />
    </svg>
);