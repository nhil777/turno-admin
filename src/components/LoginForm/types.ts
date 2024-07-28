import { SubmitHandler } from "react-hook-form";

export type LoginData = {
    email: string;
    password: string;
}

export interface LoginFormI {
    onSubmit: SubmitHandler<LoginData>;
}
