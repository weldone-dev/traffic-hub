import { EmailIcon, PhoneIcon } from "@/shared/icons";
import Link from "next/link";

export const SupportPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[90vh]">
            <h1 className="title">Центр поддержки</h1>
            <p className="text_base opacity-80 text-[32px]">Свяжитесь с нами, чтобы устранить проблему</p>

            <div className="card m-[72px] px-[72px] py-[36px] flex flex-col justify-center items-center">
                <h2 className="title_second">Техническая поддержка</h2>
                <p className="text_base opacity-80 ">Вам поможет наша команда специалистов</p>

                <div className="contact mt-[36px]">
                    <Link href="mailto:ExampleEmail@mail.ru" className="flex items-center mb-[36px] text_base">
                        <EmailIcon className="text-primary-blue mr-[24px]"/> ExampleEmail@mail.ru
                    </Link>
                    <Link href="tel:+7(777)777-77-77" className="flex items-center text_base">
                        <PhoneIcon className="text-primary-blue mr-[24px]"/> +7 (777) 777 - 77 - 77
                    </Link>
                </div>
            </div>
        </div>
    );
}