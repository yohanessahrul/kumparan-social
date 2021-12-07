import { combineReducers } from 'redux'
import AlbumReducer from './redux/album/AlbumReducer'
import CommentReducer from './redux/comment/CommentReducer'
import PhotoReducer from './redux/photo/PhotoReducer'
import PostReducer from './redux/post/PostReducer'
import TodoReducer from './redux/todo/TodoReducer'
import UserReducer from './redux/user/UserReducer'

const rootReducer = combineReducers({
  AlbumReducer,
  CommentReducer,
  PhotoReducer,
  PostReducer,
  TodoReducer,
  UserReducer
})

export default rootReducer
