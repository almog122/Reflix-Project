import React from 'react'
import { Link } from 'react-router-dom'

export default function User({user , loginUser}) {
  return (
    <Link to={`/catalog/${user.name}`}>
        <div className='user' onClick={() => loginUser(user.id)}>
            <img src={user.imageUrl} alt={""}></img>
            <div>Name : {user.name}</div>
        </div>
    </Link>
  )
}
