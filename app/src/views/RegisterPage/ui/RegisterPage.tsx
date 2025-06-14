"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {Button, FieldInput} from "@/shared/ui";
import {EmailIcon, LockIcon, NewUserIcon, PersonIcon} from "@/shared/icons";
import type {IRegisterFormValues} from "../helpers/types";

export const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting}
    } = useForm<IRegisterFormValues>();
    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null);

    const passwordValue = watch("password", "");

    const onSubmit = async (data: IRegisterFormValues) => {
        setServerError(null);
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            if (!response.ok) {

                let errorMessage = "Ошибка сервера";
                try {
                    const result = await response.json();
                    errorMessage = result.message || result.error || errorMessage;
                } catch {
                    const text = await response.text();
                    errorMessage = text || errorMessage;
                }
                setServerError(errorMessage)
            } else {
                // Успех: перенаправляем на /
                router.push("/");
            }
        } catch (error: any) {
            setServerError(error.message || "Ошибка при отправке запроса");
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div
                className="card flex w-full max-w-[846px] flex-col items-center justify-center my-[100px] p-[36px] gap-[36px]"
            >
                <h1 className="text_title-second font-semibold">
                    Создайте аккаунт
                </h1>
                {serverError && (
                    <p className="mb-[16px] text-error">
                        {serverError}
                    </p>
                )}
                <form
                    className="w-full flex flex-col gap-[36px] justify-center items-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FieldInput
                        id="login"
                        label="Логин"
                        startContent={<PersonIcon/>}
                        placeholder="Введите логин"
                        {...register("login", {
                            required: "Логин обязателен",
                            pattern: {
                                value: /^[A-Za-z0-9]+$/,
                                message: "Только латиница и цифры"
                            }
                        })}
                        error={errors.login?.message || ""}
                    />
                    <FieldInput
                        id="email"
                        label="Почта"
                        startContent={<EmailIcon/>}
                        type="email"
                        placeholder="Введите email"
                        {...register("email", {
                            required: "Email обязателен",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Неверный формат email"
                            }
                        })}
                        error={errors.email?.message || ""}
                    />
                    <FieldInput
                        id="password"
                        label="Пароль"
                        startContent={<LockIcon/>}
                        type="password"
                        mode="password"
                        placeholder="Введите пароль"
                        {...register("password", {
                            required: "Пароль обязателен",
                            minLength: {
                                value: 8,
                                message: "Минимум 8 символов"
                            }
                        })}
                        error={errors.password?.message || ""}
                    />
                    <FieldInput
                        id="confirmPassword"
                        label="Подтверждение пароля"
                        startContent={<LockIcon/>}
                        type="password"
                        mode="password"
                        placeholder="Повторите пароль"
                        {...register("confirmPassword", {
                            required: "Поле обязательно",
                            validate: value =>
                                value === passwordValue || "Пароли должны совпадать"
                        })}
                        error={errors.confirmPassword?.message || ""}
                    />
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="max-w-[310px]"
                        startContent={<NewUserIcon/>}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                <div className="text_base">
                    <span>Уже зарегистрированы? </span>
                    <Link
                        href="/register"
                        className="text_base text-primary-blue hover:underline"
                    >
                        Нажмите сюда
                    </Link>
                </div>
            </div>
        </div>
    );
}