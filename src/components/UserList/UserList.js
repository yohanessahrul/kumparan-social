import React from 'react'
import UserItem from './UserItem/UserItem'
import classes from './UserList.module.scss'

export default function UserList() {
  return (
    <div className={classes.Wrapper}>
      <UserItem />
    </div>
  )
}
