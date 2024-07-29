import { useEffect, useState } from "react";
import { Deposit } from "../../services/Deposit/types";
import { approve, get, reject } from "../../services/Deposit";
import { useParams } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Spinner } from "../../components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoneyBill, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { formatAmount } from "../../Helper";
import { toast } from "react-toastify";

export const DepositView = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deposit, setDeposit] = useState<Deposit>();

    const getDeposit = async () => {
        get(parseInt(id!)).then(response => {
            setDeposit(response);
        }).catch(() => {
            toast.error('Error fetching deposit, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    }

    const approveDeposit = (id: number) => {
        setIsLoading(true);

        approve(id).then(() => {
            toast.success('Deposit approved');

            getDeposit();
        }).catch(() => {
            toast.error('Error approving deposit, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    };

    const rejectDeposit = (id: number) => {
        setIsLoading(true);

        reject(id).then(() => {
            toast.success('Deposit rejected');

            getDeposit();
        }).catch(() => {
            toast.error('Error rejecting deposit, refresh the page and try again');
        }).finally(() => setIsLoading(false));
    };

    useEffect(() => {
        getDeposit();
    }, []);

    return isLoading || !deposit ? <Spinner /> : (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faUser} />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Customer"
                    aria-label="Customer"
                    readOnly
                    value={deposit.user.name}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    readOnly
                    value={deposit.user.email}
                    type="email"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faNewspaper} />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Account"
                    aria-label="Account"
                    readOnly
                    value={deposit.user_id}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faMoneyBill} />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Reported Amount"
                    aria-label="Amount"
                    readOnly
                    value={formatAmount(deposit.amount)}
                />
            </InputGroup>

            {isLoading ? <Spinner /> : (
                <div className="d-flex justify-content-center gap-2">
                    <Button variant="success" onClick={() => approveDeposit(deposit!.id)}>Approve</Button>
                    <Button variant="danger" onClick={() => rejectDeposit(deposit!.id)}>Reject</Button>
                </div>
            )}
        </>
    );
};
