import { useEffect, useState } from "react";
import { Deposit as DepositType } from "../../services/Deposit/types";
import { approve, get, reject } from "../../services/Deposit";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { toast } from "react-toastify";
import { DepositForm } from "../../components/DepositForm";

export const Deposit = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deposit, setDeposit] = useState<DepositType>();

    const getDeposit = async () => {
        get(parseInt(id!)).then(response => {
            setDeposit(response);
        }).catch(() => {
            toast.error('Error fetching deposit, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    const approveDeposit = () => {
        if (!deposit) {
            return;
        }

        setIsLoading(true);

        approve(deposit.id).then(() => {
            toast.success('Deposit approved');
            getDeposit();
        }).catch(() => {
            toast.error('Error approving deposit, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    };

    const rejectDeposit = () => {
        if (!deposit) {
            return;
        }

        setIsLoading(true);

        reject(deposit.id).then(() => {
            toast.success('Deposit rejected');
            getDeposit();
        }).catch(() => {
            toast.error('Error rejecting deposit, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    };

    useEffect(() => {
        getDeposit();
    }, []);

    return isLoading || !deposit ? <Spinner /> : <DepositForm deposit={deposit} approve={approveDeposit} reject={rejectDeposit} isLoading={isLoading} />;
};
