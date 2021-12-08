import React from 'react'
import classes from './Header.module.scss'

export default function Header() {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className={classes.Header}>
          <h1>
            <a href="/">
              Kumparan Social
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}
