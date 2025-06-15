"use client";
import {GraphAndSetting} from "./GraphAndSetting";
import {Button} from "@/shared/ui";
import {PlusIcon} from "@/shared/icons";

export const TraceAnalysisPage = () => {
    return (
        <article className={"box mt-[36px] mb-[140px]"}>
            <div>
                <GraphAndSetting />
            </div>
            <div className={"mt-[140px]"}>
                <Button startContent={<PlusIcon />} color={"emerald"} className={"mx-auto"}>
                    Добавить новую иллюстрацию
                </Button>
            </div>
        </article>
    );
}