import React, { useState } from 'react';
import { Users} from "../../Data";
import User from './User';

export default function Home(){

  const [usersData, setUsersData] = useState({ users: Users, currentUser: "" });

  return (
    <div className="home">
      {usersData.users.map(user=> <User user={user} key={user.id}/>)}
    </div>
  );
}
