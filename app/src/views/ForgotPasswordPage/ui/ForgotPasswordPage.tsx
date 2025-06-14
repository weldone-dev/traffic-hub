"use client";
import {useState} from "react";
import {ForgotPasswordForm} from "./ForgotPasswordForm";
import {ChangePasswordForm} from "./ChangePasswordForm";
import type {IForgotPasswordStep} from "../helpers/types";

export function ForgotPasswordPage() {
    const [step, setStep] = useState<IForgotPasswordStep>("request");

    return (
        <article className="flex items-center justify-center bg-bg mt-[30px] my-[100px] text-white">
            <div className="card w-full max-w-[846px] bg-navy p-[36px]">
                <h1 className="text_title-second text-center mb-[36px]">
                    Добро пожаловать
                </h1>
                {(step === "request"
                        ? (<ForgotPasswordForm onSuccess={() => setStep("change")}/>)
                        : (<ChangePasswordForm/>)
                )}
            </div>
        </article>
    );
}
