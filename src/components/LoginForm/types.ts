import { SubmitHandler } from "react-hook-form";

export type Login = {
    email: string;
    password: string;
}

export interface LoginFormProps {
    onSubmit: SubmitHandler<Login>;
}
