import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { list } from "../../services/Deposit";
import { DepositTable } from "../../components/DepositTable";
import { Spinner } from "../../components/Spinner";
import { toast } from "react-toastify";

export const DepositList = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deposits, setDeposits] = useState<Deposit[]>([]);

    const getDeposits = async () => {
        list().then(response => {
            setDeposits(response);
        }).catch(() => {
            toast.error('Error fetching deposits, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getDeposits();
    }, []);

    return isLoading ? <Spinner /> : <DepositTable deposits={deposits} />;
};
