"use client";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {Button, FieldInput} from "@/shared/ui";
import {EnterIcon, LockIcon} from "@/shared/icons";
import type {IChangePasswordRequest} from "../helpers/types";

export const ChangePasswordForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setError
    } = useForm<IChangePasswordRequest>();

    const onSubmit = async (data: IChangePasswordRequest) => {
        if (data.newPassword !== data.confirmPassword) {
            setError("confirmPassword", {type: "manual", message: "Пароли не совпадают"});
            return;
        }
        // Заменить на реальный вызов API!
        await new Promise(r => setTimeout(r, 500));
        alert("Пароль успешно изменён!");
        router.push("/login");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[36px]">
            <FieldInput
                label="Новый пароль"
                mode="password"
                startContent={<LockIcon />}
                placeholder="Введите новый пароль"
                {...register("newPassword", {
                    required: "Пароль обязателен",
                    minLength: {value: 8, message: "Минимум 8 символов"}
                })}
                error={errors.newPassword?.message || ""}
            />
            <FieldInput
                label="Подтвердите пароль"
                mode="password"
                startContent={<LockIcon />}
                placeholder="Повторите новый пароль"
                {...register("confirmPassword", {required: "Подтвердите пароль"})}
                error={errors.confirmPassword?.message || ""}
            />
            <Button type="submit" disabled={isSubmitting} startContent={<EnterIcon />} className="w-full">
                Войти
            </Button>
        </form>
    );
};
