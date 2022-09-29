import { TransactionInfo } from "./TransactionInfo"
import transactions from "../../jsonData/transactions.json"
import css from "./TransactionHistory.module.css"
// console.log(transactions)
export const TransactionHistory = () => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.transaction_history__head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <TransactionInfo items={transactions} />
               
            </tbody>
        </table>
    )

}