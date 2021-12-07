import { BASEAPI } from "../../constant/Api";

const setCommentsByPostId = (data) => {
  return {
    type: 'SET_COMMENTS_BY_POST_ID',
    payload: {
      data: data
    }
  }
}

export const getCommentsByPostId = (postId) => {
  return dispatch => {
    fetch(`${BASEAPI}/comments?postId=${postId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCommentsByPostId(data))
        console.log(`comment by post id ${postId}`, data)
      })
      .catch((error) => console.log(`error =>> `, error))
  }
}

const setAddCommentByPostId = (data) => {
  console.log(`asuk mari`)
  return {
    type: 'SET_ADD_COMMENT_BY_POST_ID',
    payload: {
      data: data
    }
  }
}

export const addCommentByPostId = (postId, payload) => {
  return dispatch => {
    fetch(`${BASEAPI}/comments?postId=${postId}`, { method: 'POST' }, { body: payload })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setAddCommentByPostId(payload))
        console.log(`komentarin postId ${postId}`, data)
      })
      .catch((error) => console.log(`error =>> `, error))
  }
}