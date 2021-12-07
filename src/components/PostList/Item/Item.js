import React from 'react'
import { connect } from 'react-redux'

function Item(props) {

  let itemList = null
  if (props.data && props.data.length > 0) {
    itemList = props.data.map((item, key) => {
      return (
        <div key={key}>
          <div>{item.title}</div>
          <div>{item.body}</div>
          <br></br>
        </div>
      )
    })
  }

  return (
    <div data-testid="post-item">
      {itemList}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducer.posts
  }
}

export default connect(mapStateToProps, null)(Item) 