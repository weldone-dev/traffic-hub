import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const LockIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 19}
        height={size || height || 24}
        {...otherProps}
    >
        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3.03088 8.75H2.5C1.39543 8.75 0.5 9.64543 0.5 10.75V21.25C0.5 22.3546 1.39543 23.25 2.5 23.25H16.5C17.6046 23.25 18.5 22.3546 18.5 21.25V10.75C18.5 9.64543 17.6046 8.75 16.5 8.75H15.9691C15.8741 7.21592 15.5456 5.49417 14.7868 4.03791C13.8277 2.19706 12.1485 0.75 9.5 0.75C6.85147 0.75 5.17235 2.19706 4.21317 4.03791C3.45438 5.49417 3.12585 7.21592 3.03088 8.75ZM5.03524 8.75H13.9648C13.8717 7.43598 13.5861 6.06158 13.0132 4.96209C12.3223 3.63628 11.2515 2.75 9.5 2.75C7.74853 2.75 6.67765 3.63628 5.98683 4.96209C5.41394 6.06158 5.12833 7.43598 5.03524 8.75Z" 
            fill="currentColor"
        />
    </svg>
);