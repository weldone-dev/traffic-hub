import clsx from "clsx";
import {type FC, useEffect, useState} from "react";
import Link from "next/link";
import {AnalyticsIcon, DocumentIcon, DownloadIcon, LoadingIcon} from "@/shared/icons";
import {Button, Dropdown} from "@/shared/ui";

interface IProps {

}

export const GraphAndSetting: FC<IProps> = () => {
    const numberGraph = 1;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => setIsLoading(false), 1000)
        }
    }, [])
    return (
        <article className={"flex flex-col gap-y-[24px]"}>
            <header className={"card p-[36px]"}>
                <div className={"w-full flex justify-between"}>
                    <h1 className={"text_button"}>Иллюстрация графика {numberGraph}</h1>
                    <Link className={"cursor-pointer"} href={""} download={true}>
                        <DownloadIcon/>
                    </Link>
                </div>
                <div
                    className={clsx(
                        "mt-[36px] h-[514px] rounded-[12px] flex justify-center items-center select-none",
                        (isLoading ? "[background:linear-gradient(180deg,#111827_9.79%,#141F35_100%)]" : "bg-steel-blue")
                    )}
                >

                    {isLoading
                        ? (
                            <div className={"flex flex-col items-center"}>
                                <LoadingIcon size={136} className={"animate-spin"}/>
                                <div className={"text_base mt-[24px]"}>Идет обработка...</div>
                            </div>
                        )
                        : (
                            <AnalyticsIcon className={"text-white/10"} size={172}/>
                        )}
                </div>
            </header>
            <footer className={"card p-[36px]"}>
                <h1 className={"text_button"}>Настройки</h1>
                <div className={"flex gap-[140px] mt-[24px]"}>
                    <div className={"w-full flex flex-col gap-y-[36px]"}>
                        <div>
                            <div className={"text_base text-white/60"}>Название иллюстрации</div>
                            <input className={"mt-[10px] p-[16px] rounded-[12px] bg-steel-blue w-full focus:outline-none"} type={"text"} value={"Пример текста"}/>
                        </div>
                        <div>
                            <div className={"text_base text-white/60"}>Выбор файла</div>
                            <Dropdown options={[
                                {label: "Пример текста", value: "1"},
                                {label: "Пример текста 2", value: "2"},
                                {label: "Пример текста 3", value: "3"},
                            ]} className={"mt-[10px]"} value={"1"}/>
                        </div>
                        <div>
                            <div className={"text_base text-white/60"}>Тип графика</div>
                            <Dropdown options={[
                                {label: "Пример текста", value: "1"},
                                {label: "Пример текста 2", value: "2"},
                                {label: "Пример текста 3", value: "3"},
                            ]} className={"mt-[10px]"} value={"1"}/>
                        </div>
                    </div>
                    <div className={"w-full flex flex-col gap-y-[36px]"}>
                        <div>
                            <div className={"text_base text-white/60"}>Ось X</div>
                            <Dropdown options={[
                                {label: "Пример текста", value: "1"},
                                {label: "Пример текста 2", value: "2"},
                                {label: "Пример текста 3", value: "3"},
                            ]} className={"mt-[10px]"} value={"1"}/>
                        </div>
                        <div>
                            <div className={"text_base text-white/60"}>Ось Y</div>
                            <Dropdown options={[
                                {label: "Пример текста", value: "1"},
                                {label: "Пример текста 2", value: "2"},
                                {label: "Пример текста 3", value: "3"},
                            ]} className={"mt-[10px]"} value={"1"}/>
                        </div>
                        <div>
                            <div className={"text_base text-white/60"}>Приложение</div>
                            <Dropdown options={[
                                {label: "Пример текста", value: "1"},
                                {label: "Пример текста 2", value: "2"},
                                {label: "Пример текста 3", value: "3"},
                            ]} className={"mt-[10px]"} value={"1"}/>
                        </div>
                    </div>
                </div>
                <div className={"mt-[72px] w-full flex gap-x-[24px] justify-end"}>
                    <Button color={"dark-slate"}>Отменить изменения</Button>
                    <Button startContent={<DocumentIcon />}>Сохранить изменения</Button>
                </div>
            </footer>
        </article>
    )
}