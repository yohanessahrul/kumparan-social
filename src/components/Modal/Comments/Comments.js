import React from 'react'
import classes from './Comments.module.scss'

export default function Comments() {
  return (
    <div className="modal fade" id="modalComments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Semua Komentar</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div className={classes.Item}>
              <div className={classes.Left}>
                <div className={classes.Initial}>S</div>
              </div>
              <div className={classes.Right}>
                <div className={classes.Name}>
                  Non mollit nulla
                </div>
                <div className={classes.Comment}>Enim occaecat laborum voluptate mollit pariatur culpa aliquip esse non eu laboris magna.</div>
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
                <div className={classes.Comment}>Enim occaecat laborum voluptate mollit pariatur culpa aliquip esse non eu laboris magna.</div>
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
                <div className={classes.Comment}>Enim occaecat laborum voluptate mollit pariatur culpa aliquip esse non eu laboris magna.</div>
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
                <div className={classes.Comment}>Enim occaecat laborum voluptate mollit pariatur culpa aliquip esse non eu laboris magna.</div>
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
                <div className={classes.Comment}>Enim occaecat laborum voluptate mollit pariatur culpa aliquip esse non eu laboris magna.</div>
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
                <div className={classes.Comment}>Enim occaecat laborum voluptate mollit pariatur culpa aliquip esse non eu laboris magna.</div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="input-group">
              <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
              <span className="input-group-text" onClick={() => alert('Hai')}>Komen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
