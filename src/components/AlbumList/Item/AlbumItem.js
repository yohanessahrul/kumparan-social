import React from 'react'
import classes from './AlbumItem.module.scss'
import { Link } from 'react-router-dom'

export default function AlbumItem(props) {

  let albumList = null
  if (props.data) {
    if (props.data.length > 0) {
      albumList = props.data.map((item ,key) => {
        return (
          <div className={classes.Item} key={key}>
            <Link to={`/user/${item.userId}/albums/${item.id}`}>
              {item.title}
            </Link>
          </div>
        )
      })
    }
  }

  return (
    <div className={classes.Wrapper}>
      {albumList}
    </div>
  )
}
