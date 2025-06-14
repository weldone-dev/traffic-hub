import {useCallback, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Button, FieldInput} from "@/shared/ui";
import {EmailIcon, LockIcon, PersonIcon} from "@/shared/icons";
import type {IForgotPasswordRequest} from "../helpers/types";

interface Props {
    onSuccess: () => void;
}

export const ForgotPasswordForm = ({onSuccess}: Props) => {
    const [codeSent, setCodeSent] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        watch,
        setError,
        clearErrors,
        trigger
    } = useForm<IForgotPasswordRequest>({
        mode: "all",
        reValidateMode: "onChange"
    });

    const email = watch("email");
    const emailError = errors.email?.message;
    const isEmailValid = !emailError && !!email;

    const sendCode = useCallback(async () => {
        const isValid = await trigger("email");
        if (!isValid) return;

        // Заменить на реальный вызов API!
        await new Promise(r => setTimeout(r, 500));
        setCodeSent(true);
    }, [trigger]);

    const onSubmit = useCallback(async (data: IForgotPasswordRequest) => {
        // Заменить на реальный вызов API!
        await new Promise(r => setTimeout(r, 500));
        if (data.code !== "123456") {
            setError("code", {type: "manual", message: "Неверный код"});
            return;
        }
        onSuccess();
    }, [setError, onSuccess]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[36px]">
            <FieldInput
                label="Почта"
                placeholder="Напишите свою почту"
                startContent={<EmailIcon/>}
                {...register("email", {
                    required: "Email обязателен",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Некорректный email"
                    }
                })}
                error={errors.email?.message || ""}
            />
            <FieldInput
                label="Код доступа"
                placeholder="Введите код из сообщения"
                startContent={<LockIcon/>}
                {...register("code", {
                    required: "Код обязателен"
                })}
                error={errors.code?.message || ""}
            />

            <div className="flex gap-[36px]">
                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Проверка…" : "Войти"}
                </Button>
                <Button
                    type="button"
                    color={codeSent ? "dark-slate" : "emerald"}
                    onClick={sendCode}
                    className="w-full"
                    disabled={!isEmailValid}
                >
                    {codeSent ? "Отправить повторно" : "Отправить код"}
                </Button>
            </div>
        </form>
    );
};
