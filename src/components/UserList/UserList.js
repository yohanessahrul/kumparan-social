import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem/UserItem'
import classes from './UserList.module.scss'
// import * as userAction from '../../redux/user/UserAction'

function UserList(props) {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    if (props.users) {
      setUsers(props.users)
    }
  }, [props.users])

  return (
    <div className={classes.Wrapper}>
      <UserItem data={users}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.UserReducer.users,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // onGetAllUsers: () => dispatch(userAction.getAllUsers()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList)