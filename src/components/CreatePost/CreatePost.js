import React from 'react'
import classes from './CreatePost.module.scss'

export default function CreatePost(props) {
  return (
    <div className={classes.Wrapper}>
      <textarea placeholder='Buat kiriman baru'></textarea>
        <div className='row'>
          <div className='col-md-10'></div>
          <div className='col-md-2'>
            <div className="d-grid gap-2">
              <button className='btn btn-primary btn-block'>Bagikan</button>
            </div>
          </div>
        </div>
    </div>
  )
}
