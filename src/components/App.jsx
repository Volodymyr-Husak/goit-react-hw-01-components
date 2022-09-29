import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"

// import { Friend } from "./FriendList/Friend";

import user from '../jsonData/user.json'
import data from '../jsonData/data.json';
// import transactions from "../jsonData/transactions.json"

// import friends from '../jsonData/friends.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList>
        {/* <Friend friends={friends}/> */}
      </FriendList>
      <TransactionHistory />
     
    </div>
  );
};
