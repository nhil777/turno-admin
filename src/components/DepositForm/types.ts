import { Deposit } from "../../services/Deposit/types";

export interface DepositFormProps {
    deposit: Deposit;
    isLoading: boolean;
    approve: () => void;
    reject: () => void;
}
