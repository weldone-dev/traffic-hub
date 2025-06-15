import {type FC} from "react";
import clsx from "clsx";

interface IProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
const getPages = (currentPage: number, totalPages: number): (number | string)[] => {
    const pages: (number | string)[] = [];
    pages.push(1);
    if (totalPages >= 2) pages.push(2);
    if (currentPage <= 3) {
        for (let i = 3; i <= 5 && i < totalPages - 2; i++) {
            pages.push(i);
        }
        if (totalPages > 6) {
            pages.push("…");
        }
    } else if (currentPage >= totalPages - 2) {
        pages.push("…");
        for (let i = totalPages - 4; i < totalPages - 2; i++) {
            if (i > 2) pages.push(i);
        }
    } else {
        pages.push("…");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("…");
    }

    if (totalPages > 4) pages.push(totalPages - 1);
    if (totalPages > 3) pages.push(totalPages);

    return [...new Set(pages.filter(p => typeof p === 'string' || (p >= 1 && p <= totalPages)))];
};

export const Pagination: FC<IProps> = ({currentPage, totalPages, onPageChange}) => {
    const pages = getPages(currentPage, totalPages);

    const goTo = (page: number) => {
        if (page !== currentPage && page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div
            className="flex items-center justify-center gap-[24px] text-[14px] text-white font-medium select-none text-[16px] font-normal leading-[1.666]">
            <button
                className={"disabled:text-steel-blue"}
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Назад
            </button>

            {pages.map((page, index) =>
                typeof page === "string"
                    ? (
                        <div key={index} className="">
                            ...
                        </div>
                    )
                    : (
                        <button
                            key={index}
                            className={clsx(
                                "text-center cursor-pointer",
                                page === currentPage && "text-primary-blue"
                            )}
                            onClick={() => goTo(page)}
                        >
                            {page}
                        </button>
                    )
            )}

            <button
                className={"disabled:text-steel-blue"}
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Вперед
            </button>
        </div>
    );
};
