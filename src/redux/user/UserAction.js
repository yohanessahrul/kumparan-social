import { BASEAPI } from "../../constant/Api";

const setUsers = (data) => {
  return {
    type: 'SET_USERS',
    payload: {
      data: data
    }
  }
}

export const getAllUsers = () => {
  return dispatch => {
    fetch(`${BASEAPI}/users`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUsers(data))
      })
  }
}

const setDetailUser = (data) => {
  return {
    type: 'SET_DETAIL_USER',
    payload: {
      data: data
    }
  }
}

export const getDetailUser = (userId) => {
  return dispatch => {
    fetch(`${BASEAPI}/users/${userId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDetailUser(data))
      })
  }
}