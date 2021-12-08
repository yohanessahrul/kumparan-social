import React from 'react'
import classes from './AlbumList.module.scss'
import Item from './Item/AlbumItem'

export default function AlbumList(props) {
  return (
    <div classes={classes.Wrapper}>
      <Item data={props.data} />
    </div>
  )
}
