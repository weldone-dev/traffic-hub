import {type FC} from "react";
import Link from "next/link";
import {LogoIcon} from "@/shared/icons";
import {Button} from "@/shared/ui";


export const Header: FC = () => {
    return (
        <header className={"box"}>
            <nav aria-label="Main navigation" className={"py-[29px]"}>
                <div className="flex items-center justify-between">
                    <Link href="/" className="text_base text-white">
                        <LogoIcon/>
                    </Link>
                    <ul className="flex gap-[36px] items-center ml-auto">
                        {([
                            {link: "/support", text: "Поддержка"},
                            {link: "/about-us", text: "О нас"},
                            {link: "/login", text: "Войти"},
                        ]).map(({link, text}, index) => (
                            <li key={index}>
                                <Link href={link} className="text_base hover:underline">
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button
                        as={Link}
                        href="/register"
                        className="text_base ml-[26px]"
                        color={"primary-blue"}
                    >
                        Зарегистрироваться
                    </Button>
                </div>
            </nav>
        </header>
    );
}