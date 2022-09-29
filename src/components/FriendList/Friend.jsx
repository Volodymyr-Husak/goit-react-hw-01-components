import css from './FriendList.module.css'
import propTypes from "prop-types";

export const Friend = ({friends}) => {
    return (friends.map(({id, isOnline, name, avatar}) => 
        <li className={css.item} key={id}>
            <span className={css.status} style={{ backgroundColor:  isOnline? 'green': 'tomato'}}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="200" />
            <p className={css.name}>{name}</p>
        </li>)
    )
}

Friend.propTypes = {
        friends: propTypes.arrayOf(
        propTypes.shape({
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired,
            id: propTypes.number
        }
        ),
    ),
};