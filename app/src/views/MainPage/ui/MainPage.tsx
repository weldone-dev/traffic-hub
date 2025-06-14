import type {FC} from "react";
import Link from "next/link";
import {Button, Search} from "@/shared/ui";
import {AnalyticsIcon, DownloadIcon} from "@/shared/icons";
import {UploadFile} from "@/widgets";

export const MainPage: FC = () => {
    return (
        <article className={"mt-[100px] mb-[140px] px-[80px] text-center"}>
            <h1 className={"text_title"}>Проанализируйте свой сетевой трафик</h1>
            <p className={"text_subtitle mt-[24px] max-w-[960px] mx-auto"}>
                Профессиональный инструмент анализа трафика для сетевых администраторов и специалистов по безопасности
            </p>
            <div className={"w-full max-w-[1040px] mt-[100px] mx-auto px-[40px] flex flex-col gap-[36px]"}>
                <Search/>
                <UploadFile/>
                <div className={"flex gap-[24px] mx-auto justify-center"}>
                    <Button
                        as={Link}
                        href={"/"}
                        startContent={<DownloadIcon/>}
                    >
                        Скачать Traffic Analyzer
                    </Button>
                    <Button
                        as={Link}
                        href={"/"}
                        color={"emerald"}
                        startContent={<AnalyticsIcon/>}
                    >
                        Анализ трасс
                    </Button>
                </div>
            </div>
        </article>
    );
}