import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { list } from "../../services/Deposit";

export const DepositList = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deposits, setDeposits] = useState<Deposit[]>([]);

    const getDeposits = async () => {
        list().then(response => {
            setDeposits(response);
        }).catch(() => {
            alert('Error fetching deposits, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getDeposits();
    }, []);

    return isLoading ? <p>Loading</p> : (
        <>
            <p>{JSON.stringify(deposits)}</p>
        </>
    );
};
