"use client";
import {type FC, type DragEvent, useCallback, useState} from "react";
import clsx from "clsx";
import {observer} from "mobx-react-lite";
import {useTraceAnalysis} from "@/entities/stores";
import {apiUpload} from "../model/api/upload";
import type {IUploadState} from "../helpers/types";
import {InitialState} from "./InitialState";
import {LoadingState} from "./LoadingState";
import {CompletedState} from "./CompletedState";


export const UploadFile: FC = observer(() => {
    const {files, addFiles, updateFileStatus} = useTraceAnalysis();
    const [dragActive, setDragActive] = useState(false);
    const [currentState, setCurrentState] = useState<IUploadState>("initial");

    const handleDrag = useCallback((e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            processFiles(e.dataTransfer.files);
        }
    }, []);



    const processFiles = (fileList: FileList) => {
        const addedFiles = addFiles(fileList);
        setCurrentState("loading");
        addedFiles.forEach(({ id, file }) => {
            apiUpload(file)
                .then(() => {
                    updateFileStatus(id, "success");
                })
                .catch((err: Error) => {
                    updateFileStatus(id, "error", err.message);
                })
                .finally(() => {
                    const allDone = files.every(
                        (f) => f.status === "success" || f.status === "error"
                    );
                    if (allDone) setCurrentState("completed");
                });
        });
    };

    const states = {
        initial: (<InitialState processFiles={processFiles}/>),
        loading: (<LoadingState/>),
        completed: (<CompletedState/>)
    };

    const content = states[currentState];

    return (
        <article className="card p-[36px]">
            <div
                className={clsx(
                    "border-2 border-dashed rounded-[12px]",
                    (currentState === "initial" && dragActive ? "border-primary-blue" : "border-white")
                )}
                onDragEnter={currentState === "initial" ? handleDrag : undefined}
                onDragOver={currentState === "initial" ? handleDrag : undefined}
                onDragLeave={currentState === "initial" ? handleDrag : undefined}
                onDrop={currentState === "initial" ? handleDrop : undefined}
            >
                <div className="flex flex-col gap-[16px] py-[55px] items-center px-[20px]">
                    {content}
                </div>
            </div>
        </article>
    );
});