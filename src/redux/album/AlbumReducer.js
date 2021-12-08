import { updateObject } from './../utility';

const initialState = {
  albums: [],
  isFetchAlbums: false,
  isErrorFetchAlbums: false,
  photosByAlbumId: [],
}

const setAlbums = (state, action) => {
  return updateObject(state, { albums: action.payload.data })
}

const setPhotosByAlbumId = (state, action) => {
  return updateObject(state, { photosByAlbumId: action.payload.data })
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_ALBUMS': return setAlbums(state, action)
    case 'SET_PHOTOS_BY_ALBUM_ID': return setPhotosByAlbumId(state, action)
    default: return state
  }
}

export default reducer