import React from 'react'
import { Link } from 'react-router-dom'

export default function User({user}) {
  return (
    <Link to='/catalog'>
        <div className='user'>
            <img src={user.imageUrl} alt={""}></img>
            <div>Name : {user.name}</div>
        </div>
    </Link>
  )
}
