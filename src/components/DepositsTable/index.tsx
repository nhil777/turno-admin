import { Table } from "react-bootstrap";
import { DepositsTableProps } from "./types";
import { DepositRow } from "../DepositRow";

export const DepositsTable = ({ deposits }: DepositsTableProps) => {
    return (
        <Table striped bordered hover>
          <tbody>
            {deposits.map((deposit, index) => (
              <DepositRow key={index} deposit={deposit} />
            ))}
          </tbody>
        </Table>
    );
};
