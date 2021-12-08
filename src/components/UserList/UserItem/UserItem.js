import React from 'react'
import { Link } from 'react-router-dom'
import classes from './UserItem.module.scss'

export default function UserItem(props) {
  let userList = null
  if (props.data) {
    if (props.data.length > 0) {
      userList = props.data.map((item, key) => {
        return (
          <div className={classes.Item} key={key}>
            <div className={classes.Left}>
              <div className={classes.Initial}>{item.name[0]}</div>
            </div>
            <div className={classes.Right}>
              <div className={classes.Name}>
                <Link to={`/user/${item.id}`}>
                  {item.name}
                </Link>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className={classes.Wrapper}>
      {userList}
    </div>
  )
}
