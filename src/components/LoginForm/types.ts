import { SubmitHandler } from "react-hook-form";

export type FormData = {
    email: string;
    password: string;
}

export interface LoginFormI {
    onSubmit: SubmitHandler<FormData>;
}
