import type {FC, SVGAttributes} from "react";

interface IProps extends SVGAttributes<SVGElement> {
    size?: number;
}

export const DownloadIcon: FC<IProps> = ({width, height, size, ...otherProps}) => (
    <svg
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 22}
        height={size || height || 22}
        {...otherProps}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 14.7526H7.58579L10.2928 17.4678C10.6834 17.8583 11.3165 17.8583 11.7071 17.4678L14.4142 14.7526H18.5C20.433 14.7526 22 16.3196 22 18.2526C22 20.1856 20.433 21.7526 18.5 21.7526H3.5C1.567 21.7526 0 20.1856 0 18.2526C0 16.3196 1.567 14.7526 3.5 14.7526ZM18.588 17.907C19.1301 17.907 19.5696 17.4675 19.5696 16.9254C19.5696 16.3833 19.1301 15.9439 18.588 15.9439C18.0459 15.9439 17.6064 16.3833 17.6064 16.9254C17.6064 17.4675 18.0459 17.907 18.588 17.907Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99995 0.247437V13.3332L5.34309 8.67637L3.92888 10.0906L10.2928 16.4545C10.6834 16.8451 11.3165 16.8451 11.7071 16.4545L18.071 10.0906L16.6568 8.67637L11.9999 13.3332V0.247437H9.99995Z"
            fill="currentColor"
        />

    </svg>
);