import Link from "next/link";
import {Button} from "@/shared/ui";
import {DocumentIcon, DownloadIcon} from "@/shared/icons";

export const AboutUsPage = () => {
    return (
        <article className={"text-center mt-[100px] mb-[140px]"}>
            <h1 className={"text_title"}>
                Traffic Analyzer
            </h1>
            <p className={"text_subtitle mt-[24px]"}>
                Современный инструмент для мониторинга и анализа сетевого трафика
            </p>
            <div className={"card mt-[36px] p-[36px] flex flex-col gap-[36px] max-w-[898px] mx-auto"}>
                <h2 className={"text_title-second"}>
                    Основные возможности
                </h2>
                <div className={"text_base flex flex-col gap-[24px] text-white/60"}>
                    <p>Перехват трафика независимо от конфигурации сети</p>
                    <p>Автоматическое определение приложений, генерирующих пакеты</p>
                    <p className={"max-w-[760px] mx-auto"}>
                        Экспорт данных в удобный .csv-формат с детализацией: заголовки пакетов, размеры, временные
                        метки, назначение
                    </p>
                    <p className={"max-w-[730px] mx-auto"}>
                        Анонимизация IP и MAC-адресов для защиты конфиденциальности (с сохранением возможности
                        отслеживать соединения внутри приложений)
                    </p>
                </div>
                <div className={"flex gap-[24px] justify-center"}>
                    <Button as={Link} href={"/"} download={true} startContent={<DownloadIcon/>}>
                        Скачать Traffic Analyzer
                    </Button>
                    <Button as={Link} href={"/"} download={true} startContent={<DocumentIcon/>}>
                        Скачать инструкцию
                    </Button>
                </div>
            </div>
        </article>
    );
}