import React from 'react'
import { useContext } from 'react'
import { UserLoginContext } from '../../contexts/userLoginContext/userLoginContext'
function UserProfile() {
    let {user}=useContext(UserLoginContext)
  return (
    <div>
      <h1>User Profile</h1>
      <p>{user.username}</p>
    </div>
  )
}

export default UserProfile