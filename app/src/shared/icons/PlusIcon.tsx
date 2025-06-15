import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const PlusIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 15}
        height={size || height || 16}
        {...otherProps}
    >
        <path d="M15 6.51415V8.97642H0V6.51415H15ZM8.8978 0.5V15.5H6.11723V0.5H8.8978Z" fill="currentColor"/>
    </svg>
);