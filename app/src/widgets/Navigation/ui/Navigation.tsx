import {type FC} from "react";
import Link from "next/link";


export const Navigation: FC = () => {
    return (
        <header>
            <nav aria-label="Main navigation">
                <div className="flex items-center justify-between px-4 py-2">
                    <a href="/" className="text-white font-bold text-lg">
                        TrafficHub
                    </a>
                    <ul className="hidden md:flex gap-6 text-sm text-white items-center">
                        <li>
                            <Link href="/support" className="hover:underline">
                                Поддержка
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:underline">
                                Войти
                            </Link>
                        </li>
                    </ul>
                    <Link
                        href="/register"
                        className="ml-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                        Зарегистрироваться
                    </Link>
                </div>
            </nav>
        </header>
    );
}