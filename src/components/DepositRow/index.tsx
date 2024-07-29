import { useNavigate } from "react-router-dom";
import { convertDateString, formatAmount } from "../../Helper";
import { DepositRowProps } from "./types";

export const DepositRow = ({ deposit }: DepositRowProps) => {
    const navigate = useNavigate();

    return (
      <tr onClick={() => navigate(`/deposit/${deposit.id}`)} style={{ cursor: 'pointer' }}>
        <td>
          <strong>{deposit.user.name} - {deposit.status}</strong>
          <p>{convertDateString(deposit.created_at)}</p>
        </td>
        <td>${formatAmount(deposit.amount)}</td>
      </tr>
    );
}
