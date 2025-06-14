import type {FC} from "react";
import {LoadingIcon} from "@/shared/icons";
import {useTraceAnalysis} from "@/entities/stores";


export const LoadingState:FC = () => {
    const {files} = useTraceAnalysis();
    const multipleFiles = (files.length > 1);
    return (
        <>
            <div className="text_subtitle mt-[5px]">
                {(multipleFiles ? "Загрузка файлов" : "Загрузка файла")}
            </div>
            <LoadingIcon className="animate-spin "/>
            <div className="mt-4 space-y-2 w-full px-4">
                {files.map((item) => (
                    <div key={item.id} className="flex justify-center">
                        <div className="text-sm">{item.file.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
}