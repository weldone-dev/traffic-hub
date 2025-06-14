import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const AnalyticsIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 20}
        height={size || height || 18}
        {...otherProps}
    >
        <path
            d="M20.01 15.835V17.835H3.98999C1.77999 17.835 -0.0100098 16.045 -0.0100098 13.835V0.165039H1.98999V13.835C1.98999 14.935 2.88999 15.835 3.98999 15.835H20.01Z"
            fill="currentColor"
        />
        <path
            d="M19.7 2.82504L13.75 8.77504L9.88997 4.90504C8.04997 6.74504 4.63997 10.155 2.95997 11.835L2.75997 12.045L2.71997 12.075V9.24504L9.88997 2.07504C11.17 3.36504 12.46 4.65504 13.75 5.94504L18.28 1.41504L19.7 2.82504Z"
            fill="currentColor"
        />

    </svg>
);