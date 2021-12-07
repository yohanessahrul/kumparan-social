import React from 'react'

export default function EditPost() {
  return (<div className="modal fade" id="editPostModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              defaultValue="Ini adalah judulnya"
              onChange={() => console.log('typing..')}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value="Ini adalah isinya..">
            </textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary">Simpan perubahan</button>
        </div>
      </div>
    </div>
  </div>
  )
}
