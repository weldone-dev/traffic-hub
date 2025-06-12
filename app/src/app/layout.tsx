import type {ReactNode} from "react";
import type {Metadata} from "next";
import {roboto} from "@/shared/fonts";
import {Footer, Header} from "@/widgets";
import "./globals.css";


const URL_SITE = "https://traffichub.example.com" //нужно изменить на актуальный
const TITLE = "TrafficHub — Анализ трафика и безопасность сети";
export const metadata: Metadata = {
    metadataBase: new URL(URL_SITE),
    title: TITLE,
    description: "TrafficHub — платформа для глубокого анализа сетевого трафика. Идеально подходит для администраторов, специалистов по кибербезопасности и IT-команд, обеспечивающих защиту и стабильность сети.",
    icons: {
        icon: "/favicon.png",
    },
    keywords: [
        "анализ трафика",
        "сетевой мониторинг",
        "безопасность сети",
        "кибербезопасность",
        "TrafficHub",
        "инструменты для администраторов",
        "анализ пакетов",
        "сетевой трафик",
        "мониторинг сети"
    ],
    authors: [{name: "TrafficHub Team"}],
    creator: "TrafficHub",
    publisher: "TrafficHub",
    robots: "index, follow",
    alternates: {
        canonical: URL_SITE,
    },
    openGraph: {
        title: TITLE,
        description: "Глубокий анализ сетевого трафика и мониторинг угроз в реальном времени.",
        url: URL_SITE,
        siteName: "TrafficHub",
        locale: "ru_RU",
        type: "website",
        images: [
            {
                url: "/metadata-image.jpg",
                width: 1024,
                height: 1024,
                alt: "TrafficHub логотип и график роста",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: "Инструмент для специалистов по сетевой безопасности и системных администраторов.",
        images: ["/metadata-image.jpg"],
        // creator: "@example", // если есть акк в x.com при желании раскомментировать и заменить
    }
};

export default function RootLayout(
    {children,}: Readonly<{
        children: ReactNode;
    }>
) {
    return (
        <html lang="ru">
        <body className={`${roboto.variable} antialiased`}>
        <div className={"flex flex-col min-h-screen"}>
            <Header/>
            <div className={"flex-grow"}>
                {children}
            </div>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
