import css from './FriendList.module.css'
import { Friend } from "./Friend";

import friends from '../../jsonData/friends.json';



export const FriendList = () => {
    return (
        <ul className={css.friend_list}>
            <Friend friends={friends}/> 
        </ul>
    )
}