import { updateObject } from '../utility'

const initialState = {
  users: [],
  isFetchUsers: false,
  isErrorFetchUsers: false,
  detailUser: null
}

const setUsers = (state, action) => {
  return updateObject(state, { users: action.payload.data })
}

const setDetailUser = (state, action) => {
  return updateObject(state, { detailUser: action.payload.data })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS': return setUsers(state, action)
    case 'SET_DETAIL_USER': return setDetailUser(state, action)
    default: return state
  }
}

export default reducer