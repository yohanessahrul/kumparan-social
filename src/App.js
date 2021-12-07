import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import routes from './routes'
import history from './history'
import React from 'react'

function App() {
  let routerList = routes.map((route, key) => {
    return (
      <Route
        key={key}
        history={history}
        path={route.path}
        element={route.component}/>
    )
  })

  return (
    <React.Fragment>
      <Routes>
        {routerList}
      </Routes>
    </React.Fragment>
  );
}


export default connect(null, null)(App);
