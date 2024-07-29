import { Table } from "react-bootstrap";
import { DepositTableProps } from "./types";
import { DepositRow } from "../DepositRow";

export const DepositTable = ({ deposits }: DepositTableProps) => {
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
