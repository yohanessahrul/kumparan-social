import { updateObject } from './../utility';

const initialState = {
  posts: [],
  isFetchPosts: false,
  isErrorFetchPosts: false,
  detailPost: null,
  changeListener: false,
  detailPostForChange: null,
  isSuccessUpdatePost: false,
  isGlobalErrorNotification: false,
  isSuccessPost: false,
  isSuccessDeletePost: false
}

export const setPosts = (state, action) => {
  return updateObject(state, {posts: action.payload.data})
}

const setIsFetchPosts = (state, action) => {
  return updateObject(state, { isFetchPosts: action.payload.value })
}

const setIsErrorFetchPosts = (state, action) => {
  return updateObject(state, { isErrorFetchPosts: action.payload.value })
}

const setDetailPost = (state, action) => {
  return updateObject(state, {detailPost: action.payload.data})
}

const setDetailPostForUpdate = (state, action) => {
  return updateObject(state, { detailPostForChange: action.payload.data })
}

const setNewPost = (state, action) => {
  let postsCp = state.posts
  postsCp.unshift(action.payload.data)
  return updateObject(state, { posts: postsCp, isSuccessPost: !state.isSuccessPost, changeListener: !state.changeListener })
}

const setUpdatePost = (state, action) => {
  let postsCp = state.posts
  postsCp.forEach((item, i) => {
    if (action.payload.data.id === item.id) {
      postsCp[i].title = action.payload.data.title
      postsCp[i].body = action.payload.data.body
    }
  })
  return updateObject(state, { posts: postsCp, isSuccessUpdatePost: !state.isSuccessUpdatePost, changeListener: !state.changeListener })
}

const setGlobalError = (state) => {
  return updateObject(state, { isGlobalErrorNotification: true })
}

const setIsSuccessPost = (state, action) => {
  return updateObject(state, { isSuccessPost: action.payload.value })
}

const setIsSuccessUpdatePost = (state, action) => {
  return updateObject(state, { isSuccessUpdatePost: action.payload.value })
}

const setIsSuccessDeletePost = (state) => {
  return updateObject(state, { setIsSuccessDeletePost: false })
}

const setDeletePost = (state, action) => {
  let postsCp = state.posts
  let newPosts = postsCp.filter((item) => item.id !== action.payload.id)
  return updateObject(state, { posts: newPosts , setIsSuccessDeletePost: true })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS': return setPosts(state, action)
    case 'SET_IS_FETCH_POSTS': return setIsFetchPosts(state, action)
    case 'SET_IS_ERROR_FETCH_POSTS': return setIsErrorFetchPosts(state, action)
    case 'SET_DETAIL_POST': return setDetailPost(state, action)
    case 'SET_DETAIL_POST_FOR_UPDATE': return setDetailPostForUpdate(state, action)
    case 'SET_NEW_POST': return setNewPost(state, action)
    case 'SET_UPDATE_POST': return setUpdatePost(state, action)
    case 'SET_GLOBAL_ERROR': return setGlobalError(state)
    case 'SET_IS_SUCCESS_POST': return setIsSuccessPost(state, action)
    case 'SET_IS_SUCCESS_UPDATE_POST': return setIsSuccessUpdatePost(state, action)
    case 'SET_IS_SUCCESS_DELETE_POST': return setIsSuccessDeletePost(state)
    case 'SET_DELETE_POST': return setDeletePost(state, action)
    
    default: return state
  }
}

export default reducer