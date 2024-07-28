import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { approve, get, reject } from "../../services/Deposit";
import { useParams } from "react-router-dom";

export const DepositView = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deposit, setDeposit] = useState<Deposit>();

    const getDeposit = async () => {
        get(parseInt(id!)).then(response => {
            setDeposit(response);
        }).catch(() => {
            alert('Error fetching deposit, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    const approveDeposit = (id: number) => {
        approve(id).then(() => {
            alert('Deposit approved');

            getDeposit();
        }).catch(() => {
            alert('Error approving deposit, refresh the page and try again');
        });
    };

    const rejectDeposit = (id: number) => {
        reject(id).then(() => {
            alert('Deposit rejectd');

            getDeposit();
        }).catch(() => {
            alert('Error rejecting deposit, refresh the page and try again');
        });
    };

    useEffect(() => {
        getDeposit();
    }, []);

    return isLoading ? <p>Loading</p> : (
        <>
            <p>{JSON.stringify(deposit)}</p>
            <button onClick={() => approveDeposit(deposit!.id)}>Approve</button>
            <button onClick={() => rejectDeposit(deposit!.id)}>Reject</button>
        </>
    );
};
