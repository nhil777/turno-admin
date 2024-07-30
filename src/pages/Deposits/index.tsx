import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { list } from "../../services/Deposit";
import { DepositsTable } from "../../components/DepositsTable";
import { Spinner } from "../../components/Spinner";
import { toast } from "react-toastify";

export const Deposits = () => {
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

    return isLoading ? <Spinner /> : <DepositsTable deposits={deposits} />;
};
