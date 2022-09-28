import css from './FriendList.module.css'

export const Friend = ({friends}) => {
    return (friends.map(({id, isOnline, name, avatar}) => 
        <li className={css.item} id ={id}>
            <span className={css.status}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="200" />
            <p className={css.name}>{name}</p>
        </li>)
    )
}