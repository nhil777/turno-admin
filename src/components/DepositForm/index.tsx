import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoneyBill, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { formatAmount } from "../../Helper";
import { CenteredContainer } from "../CenteredContainer";
import { DepositFormProps } from "./types";

export const DepositForm = ({ deposit, isLoading, approve, reject }: DepositFormProps) => {
    return (
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
                <CenteredContainer>
                    <Button variant="success" onClick={approve}>Approve</Button>
                    <Button variant="danger" onClick={reject}>Reject</Button>
                </CenteredContainer>
            )}
        </>
    )
}