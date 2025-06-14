import {type ChangeEvent, type FC, useCallback, useRef} from "react";
import {ExcludeIcon} from "@/shared/icons";
import {Button} from "@/shared/ui";


interface IProps {
    processFiles:  (fileList: FileList,) => void;
}
export const InitialState:FC<IProps> = (
    {
        processFiles
    }
) => {
    const refInput = useRef<HTMLInputElement>(null);
    const handlerSelectFiles = () => {
        if (!refInput.current) return;
        refInput.current.click();
    }
    const handleFileInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            processFiles(e.target.files);
        }
    }, [processFiles]);
    return (
        <>
            <ExcludeIcon className="text-primary-blue"/>
            <div className="text_subtitle mt-[5px]">Перетащите файл сюда</div>
            <div className="text_extra">или</div>
            <Button
                color="dark-slate"
                className="w-fit mx-auto"
                onClick={handlerSelectFiles}
            >
                Выберите файл
            </Button>
            <input
                id="file-upload-input"
                ref={refInput}
                type="file"
                multiple
                className="hidden"
                onChange={handleFileInput}
            />
        </>
    )
}