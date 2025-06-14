import type {FC} from "react";
import clsx from "clsx";
import {FileIcon} from "@/shared/icons";
import {useTraceAnalysis} from "@/entities/stores";

export const CompletedState: FC = () => {
    const {files} = useTraceAnalysis();
    const multipleFiles = (files.length > 1);
    const hasError = files.some((file) => file.status === "error");
    return (
        <>
            <div className="text_subtitle">
                {(hasError
                        ? (`Ошибка при загрузки ${multipleFiles ? "файлов" : "файла"} `)
                        : (multipleFiles ? "Файлы загружены" : "Файл загружен")
                )}
            </div>
            <div className="mt-[8px]">
                <div className="flex items-start">
                    <FileIcon className="mr-[18px] flex-shrink-0"/>
                    <div className={clsx(
                        "min-w-0 max-w-full overflow-hidden my-auto",
                    )}>
                        <div className="flex flex-wrap items-center truncate">
                            {files.slice(0, 3).map((item, index) => (
                                <div key={item.id} className="inline-flex items-center">
                                        <span className={clsx(
                                            "text_accent truncate",
                                            item.status === "error" && "underline underline-offset-2 text-error"
                                        )}>
                                            {item.file.name}
                                        </span>
                                    {index < Math.min(files.length, 3) - 1 && (
                                        <span className="mx-[3px]">,</span>
                                    )}
                                </div>
                            ))}
                            {files.length > 3 && (
                                <span className="text_accent ml-[3px]">...</span>
                            )}
                        </div>

                        {files.some((f) => f.status === "error") && (
                            <div className="text-xs text_accent mt-1 truncate">
                                {files
                                    .filter(f => f.status === "error" && f.errorMessage)
                                    .slice(0, 2)
                                    .map(f => f.errorMessage)
                                    .join(", ")}
                                {files.filter(f => f.status === "error").length > 2 && "..."}
                            </div>
                        )}
                    </div>
                </div>
                {files.some(f => f.status === "error") && (
                    <div className="text-xs text_accent mt-2">
                        {files
                            .filter(f => f.status === "error" && f.errorMessage)
                            .map(f => f.errorMessage)
                            .join(", ")
                        }
                    </div>
                )}
            </div>
        </>
    );
}