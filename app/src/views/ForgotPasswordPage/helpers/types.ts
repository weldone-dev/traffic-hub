export type IForgotPasswordStep = "request" | "change";

export interface IForgotPasswordRequest {
    email: string;
    code: string;
}

export interface IChangePasswordRequest {
    newPassword: string;
    confirmPassword: string;
}