import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const EmailIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 25 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 25}
        height={size || height || 20}
        {...otherProps}
    >
        <path
            d="M0.5 3.64879V1.90001C0.5 1.23727 1.03726 0.700012 1.7 0.700012H23.3C23.9627 0.700012 24.5 1.23727 24.5 1.90001V3.64879C24.5 4.05496 24.2945 4.43356 23.954 4.65492L13.154 11.6749C12.7563 11.9334 12.2437 11.9334 11.846 11.6749L1.04601 4.65492C0.705463 4.43356 0.5 4.05496 0.5 3.64879Z" 
            fill="currentColor"
        />
        <path
            d="M11.846 14.0749L2.35399 7.9051C1.55568 7.38621 0.5 7.95911 0.5 8.91124V18.1C0.5 18.7628 1.03726 19.3 1.7 19.3H23.3C23.9627 19.3 24.5 18.7628 24.5 18.1V8.91124C24.5 7.95911 23.4443 7.38621 22.646 7.9051L13.154 14.0749C12.7563 14.3334 12.2437 14.3334 11.846 14.0749Z" 
            fill="currentColor"
        />
    </svg>
);