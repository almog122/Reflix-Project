import React, { useState } from 'react';
import { Users , Movies} from "../../Data";
import { Constants} from "../../Constants";
import User from './User';
import './Home.css'

export default function Home(){

  const [usersData, setUsersData] = useState({ users: Users, currentUser: "" });

  const loginUser = function(userID){
    let user = usersData.users.find( user => user.id === userID);
    setUsersData({...usersData, currentUser: user.name})
    
    if(localStorage[user.name] === undefined){
      localStorage.setItem(user.name, JSON.stringify({
        movies : Movies ,
        budget : Constants.STARTING_BUDGET
      }))
    }

    localStorage.setItem('currentUser' , user.name)
  }

  return (
    <div className="home">
      {usersData.users.map(user=> <User user={user} loginUser={loginUser} key={user.id}/>)}
    </div>
  );
} 
