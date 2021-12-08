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

const setUpdatePost = (data) => {
  return {
    type: 'SET_UPDATE_POST',
    payload: {
      data: data
    }
  }
}

const setGlobalError = () => {
  return {
    type: 'SET_GLOBAL_ERROR'
  }
}

export const updatePost = (payload, id) => {
  return dispatch => {
    fetch(`${BASEAPI}/posts/${id}`, { method: 'PUT' }, { body: payload })
      .then((response) => response.json())
      .then((data) => {
        payload.id = data.id
        dispatch(setUpdatePost(payload))
      })
      .catch((error) => {
        console.log(`error ==>`, error)
        dispatch(setGlobalError())
      })
  }
}

export const setIsSuccessDeletePost = () => {
  return {
    type: 'SET_IS_SUCCESS_DELETE_POST'
  }
}

export const setDeletePost = (id) => {
  return {
    type: 'SET_DELETE_POST',
    payload: {
      id: id
    }
  }
}

export const deletedPost = (id) => {
  return dispatch => {
    fetch(`${BASEAPI}/posts/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDeletePost(id))
      })
      .catch((error) => {
        console.log(`error ==>`, error)
        dispatch(setGlobalError())
      })
  }
}

export const setDetailPostForUpdate = (data) => {
  return {
    type: 'SET_DETAIL_POST_FOR_UPDATE',
    payload: {
      data: data
    }
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

export const getDetailPost = (id, item) => {
  return dispatch => {
    fetch(`${BASEAPI}/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDetailPost(data))
      })
      .catch((error) => {
        console.log(`error ==>`, error)
        dispatch(setGlobalError())
      })
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
        dispatch(setIsErrorFetchPosts(true))
      })
  }
}

export const getAllPostsByUserId = (userId) => {
  return dispatch => {
    dispatch(setIsFetchPosts(true))
    fetch(`${BASEAPI}/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPosts(data))
      })
      .catch((error) => {
        dispatch(setIsErrorFetchPosts(true))
      })
  }
}

export const setIsSuccessPost = () => {
  return {
    type: 'SET_IS_SUCCESS_POST',
    payload: {
      value: false
    }
  }
}

export const setIsSuccessUpdatePost = () => {
  return {
    type: 'SET_IS_SUCCESS_UPDATE_POST',
    payload: {
      value: false
    }
  }
}