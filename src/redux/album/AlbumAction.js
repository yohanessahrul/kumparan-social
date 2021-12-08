import { BASEAPI } from "../../constant/Api"

const setAlbums = (data) => {
  return {
    type: 'SET_ALBUMS',
    payload: {
      data: data
    }
  }
}

export const getAlbumsByUserId = (userId) => {
  return dispatch => {
    fetch(`${BASEAPI}/albums?userId=${userId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setAlbums(data))
      })
  }
}

const setPhotosByAlbumId = (data) => {
  return {
    type: 'SET_PHOTOS_BY_ALBUM_ID',
    payload: {
      data: data
    }
  }
}

export const getPhotosByAlbumId = (albumId) => {
  return dispatch => {
    fetch(`${BASEAPI}/photos?albumId=${albumId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPhotosByAlbumId(data))
      })
  }
}

