import propTypes from "prop-types";
import css from "./TransactionHistory.module.css"
// console.log({transactions})
// import transactions from "../../jsonData/transactions.json"
// console.log(transactions)


export const TransactionInfo = ({ items }) => {
  
    return (items.map(({id, type, amount, currency}, index) =>
            <tr  key={id} style={{ backgroundColor:  index % 2?'white':' rgb(183, 243, 224)'}}>
                <td className={css.type}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>)
     )
 
}


TransactionInfo.propTypes = {
        transactions: propTypes.arrayOf(
            propTypes.shape({
                id: propTypes.string.isRequired,
                type: propTypes.string.isRequired,
                amount: propTypes.string.isRequired,
                currency: propTypes.string.isRequired
            }
        ),
    ),
};
