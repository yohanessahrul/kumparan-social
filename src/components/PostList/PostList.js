import React from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item'

function PostList(props) {

  return (
    <div data-testid='post-list'>
      <Item data={props.data}/>
    </div>
  )
}

export default connect()(PostList)
