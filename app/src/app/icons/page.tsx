//Страница для просмотра иконок, при желании можно полностью удалить папку src/app/icons

import {notFound} from "next/navigation";
import {IconList} from "@/app/icons/ui/IconList";

export default function PageIcons() {
    if (process.env.NODE_ENV !== 'development') {
        return notFound();
    }
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Галерея иконок</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <IconList/>
            </div>
        </div>
    );
}