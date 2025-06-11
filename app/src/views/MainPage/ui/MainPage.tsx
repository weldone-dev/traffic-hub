import type {FC} from "react";
import {Button} from "@/shared/ui";
import {ExcludeIcon} from "@/shared/icons";
import {Navigation} from "@/widgets/Navigation/ui/Navigation";

export const MainPage: FC = () => {
    return (
        <div>
            <Button
                color={"emerald"}
                startContent={<ExcludeIcon className={"text-[#2563EB]"}/>}
            >
                Зарегистрироваться
            </Button>

            <Navigation />
        </div>
    );
}