import { TransactionInfo } from "./TransactionInfo"
import transactions from "../../jsonData/transactions.json"
// console.log(transactions)
export const TransactionHistory = () => {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <TransactionInfo item={transactions} />
                {/* <tr>
                <td>Invoice</td>
                <td>125</td>
                <td>USD</td>
                </tr>
                <tr>
                <td>Withdrawal</td>
                <td>85</td>
                <td>USD</td>
                </tr> */}
            </tbody>
        </table>
    )

}