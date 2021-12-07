import { updateObject } from './../utility';

const initialState = {
  comments: [],
  isFetchComments: false,
  isErrorFetchComments: false,
  commentsByPostId: [],
  changeListener: false
}

const setCommentsByPostId = (state, action) => {
  return updateObject(state, { commentsByPostId: action.payload.data })
}
const setAddCommentByPostId = (state, action) => {
  let commentsByPostIdCp = state.commentsByPostId
  commentsByPostIdCp.push(action.payload.data)
  return updateObject(state, { commentsByPostId: commentsByPostIdCp, changeListener: !state.changeListener })
}

const cccCccc = () => { }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMMENTS_BY_POST_ID': return setCommentsByPostId(state, action)
    case 'SET_ADD_COMMENT_BY_POST_ID': return setAddCommentByPostId(state, action)
    case 'ccccc': return cccCccc(state, action)
    default: return state
  }
}

export default reducer