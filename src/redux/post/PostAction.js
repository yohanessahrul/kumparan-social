import { BASEAPI } from "../../constant/Api"

const setNewPost = (data) => {
  return {
    type: 'SET_NEW_POST',
    payload : {
      data: data
    }
  }
}

export const createPost = (payload) => {
  return dispatch => {
    fetch(`${BASEAPI}/posts`, { method: 'POST' }, { body: payload })
      .then((response) => response.json())
      .then((data) => {
        payload.id = data.id
        dispatch(setNewPost(payload))
      })
  }
}

export const updatePost = (payload, id) => {
  return dispatch => {
    fetch(`${BASEAPI}/posts/${id}`, { method: 'PUT' }, { body: payload })
      .then((response) => response.json())
      .then((data) => {
        console.log(`updated post`, data)
      })
      .catch((error) => console.log(`error =>> `, error))
  }
}

export const deletedPost = (id) => {
  return dispatch => {
    fetch(`${BASEAPI}/posts/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        console.log(`deleted post`, data)
      })
      .catch((error) => console.log(`error =>> `, error))
  }
}

const setDetailPost = (data) => {
  return {
    type: 'SET_DETAIL_POST',
    payload: {
      data: data
    }
  }
}

export const getDetailPost = (id) => {
  return dispatch => {
    fetch(`${BASEAPI}/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(`data`, data)
        dispatch(setDetailPost(data))
      })
      .catch((error) => console.log(`error =>> `, error))
  }
}

const setPosts = (data) => {
  return {
    type: 'SET_POSTS',
    payload: {
      data: data
    }
  }
}

const setIsFetchPosts = (val) => {
  return {
    type: 'SET_IS_FETCH_POSTS',
    payload: {
      value: val
    }
  }
}

const setIsErrorFetchPosts = (val) => {
  return {
    type: 'SET_IS_ERROR_FETCH_POSTS',
    payload: {
      value: val
    }
  }
}

export const getAllPosts = () => {
  return dispatch => {
    dispatch(setIsFetchPosts(true))
    fetch(`${BASEAPI}/posts`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPosts(data))
      })
      .catch((error) => {
        console.log(`error => `, error)
        dispatch(setIsErrorFetchPosts(true))
      })
  }
}