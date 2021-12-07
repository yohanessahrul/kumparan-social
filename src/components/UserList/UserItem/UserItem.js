import React from 'react'
import classes from './UserItem.module.scss'

export default function UserItem() {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Item}>
        <div className={classes.Left}>
          <div className={classes.Initial}>S</div>
        </div>
        <div className={classes.Right}>
          <div className={classes.Name}>
            Non mollit nulla
          </div>
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.Left}>
          <div className={classes.Initial}>S</div>
        </div>
        <div className={classes.Right}>
          <div className={classes.Name}>
            Non mollit nulla
          </div>
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.Left}>
          <div className={classes.Initial}>S</div>
        </div>
        <div className={classes.Right}>
          <div className={classes.Name}>
            Non mollit nulla
          </div>
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.Left}>
          <div className={classes.Initial}>S</div>
        </div>
        <div className={classes.Right}>
          <div className={classes.Name}>
            Non mollit nulla
          </div>
        </div>
      </div>
    </div>
  )
}
