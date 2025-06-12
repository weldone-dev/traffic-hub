import Link from "next/link";
import {EmailIcon, PhoneIcon} from "@/shared/icons";

export const SupportPage = () => {
    return (
        <div className="flex flex-col justify-center items-center my-[100px]">
            <h1 className="text_title">Центр поддержки</h1>
            <p className="text_subtitle text-white/80 mt-[24px]">Свяжитесь с нами, чтобы устранить проблему</p>

            <div className="card mt-[72px] px-[72px] py-[36px] flex flex-col justify-center items-center">
                <h2 className="text_title-second">Техническая поддержка</h2>
                <p className="text_base text-white/80 mt-[12px]">Вам поможет наша команда специалистов</p>

                <Link href="mailto:ExampleEmail@mail.ru" className="text_base flex items-center mt-[36px]">
                    <EmailIcon className="text-primary-blue mr-[24px]"/>ExampleEmail@mail.ru
                </Link>
                <Link href="tel:+7(777)777-77-77" className="text_base flex items-center mt-[36px]">
                    <PhoneIcon className="text-primary-blue mr-[24px]"/>+7 (777) 777 - 77 - 77
                </Link>
            </div>
        </div>
    );
}