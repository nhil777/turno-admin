import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { list } from "../../services/Deposit";
import { useNavigate } from "react-router-dom";
import { convertDateString, formatAmount } from "../../Helper";

export const DepositList = () => {
    const navigate = useNavigate();
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
        deposits.map(deposit => {
            return (
                <tr onClick={() => navigate(`/deposit/${deposit.id}`)}>
                    <td>
                        <strong>{deposit.user.name} - {deposit.status}</strong>
                        <p>{convertDateString(deposit.created_at)}</p>
                    </td>
                    <td>${formatAmount(deposit.amount)}</td>
                </tr>
            )
        })
    );
};
