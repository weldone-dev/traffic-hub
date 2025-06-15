"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useCallback, useState} from "react";
import {useForm} from "react-hook-form";
import {Button, FieldInput} from "@/shared/ui";
import {EnterIcon, LockIcon, PersonIcon} from "@/shared/icons";
import type {ILoginForm} from "../helpers/types";
import Form from "next/form";

export const LoginPage = () => {
    const router = useRouter();
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<ILoginForm>();

    const onSubmit = useCallback(async (data: ILoginForm) => {
        setServerError(""); // очищаем ошибку

        // Заменить на реальный вызов API!
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Проверка успешности и реализация поведения
        if (data.login === "admin" && data.password === "1234") {
            alert("Вход выполнен успешно!");
            router.push("/"); // Переписать на переход на нужную страницу
        } else {
            setServerError("Ошибка авторизации"); // Показаь ошибку
        }
    }, [router]);

    return (
        <article className="flex items-center justify-center bg-bg mt-[30px] my-[100px] text-white">

            <div className="card w-full max-w-[846px] bg-navy p-[36px]">
                <h1 className="text_title-second text-center mb-[36px]">
                    Добро пожаловать
                </h1>

                <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[36px]" action={""}>
                    <FieldInput
                        label="Логин"
                        placeholder="Введите логин"
                        startContent={<PersonIcon/>}
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
                        label="Пароль"
                        startContent={<LockIcon/>}
                        placeholder="Введите пароль"
                        mode="password"
                        {...register("password", {
                            required: "Пароль обязателен",
                            minLength: {value: 8, message: "Минимум 8 символов"}
                        })}
                        error={errors.password?.message || ""}
                    />

                    <div className="flex justify-between">
                        <Link href="/register" className="text_base text-white/60 hover:underline">
                            Регистрация
                        </Link>
                        <Link href="/forgot-password" className="text_base text-white/60 hover:underline">
                            Забыли пароль?
                        </Link>
                    </div>

                    {serverError && (
                        <p className="text-sm text-error text-center">{serverError}</p>
                    )}

                    <Button
                        as="button"
                        type="submit"
                        disabled={isSubmitting}
                        startContent={<EnterIcon className="mt-[1px]"/>}
                        className="w-full"
                    >
                        {(isSubmitting ? "Входим…" : "Войти")}
                    </Button>
                </Form>
            </div>
        </article>
    );
}