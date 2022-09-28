import propTypes from "prop-types";
// console.log({transactions})
// export const TransactionInfo = ({transactions}) => {
//     return (transactions.map(({id, type, amount, currency}) =>
//             <tr key={id}>
//                 <td>{type}</td>
//                 <td>{amount}</td>
//                 <td>{currency}</td>
//             </tr>)
//      )
 
// }

export const TransactionInfo = ({transactions}) => {
    return (
            <tr >
                <td>lkjl</td>
                <td>xxzx</td>
                <td>ppp</td>
            </tr>
        
    )
     
 
}
// export const Friend = ({friends}) => {
//     return (friends.map(({id, isOnline, name, avatar}) => 
//         <li className={css.item} key={id}>
//             <span className={css.status} style={{ backgroundColor: getBackgroundColor(isOnline) }}></span>
//             <img className={css.avatar} src={avatar} alt="User avatar" width="200" />
//             <p className={css.name}>{name}</p>
//         </li>)
//     )
// }

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
