import HomeContainer from "./containers/Home/HomeContainer"
import UserContainer from "./containers/User/UserContainer"
import AlbumContainer from './containers/Album/AlbumContainer'

const routes = [
  {
    path: '/',
    component: <HomeContainer />,
    exact: true
  },
  {
    path: '/user/:id',
    component: <UserContainer />,
    exact: true
  },
  {
    path: '/user/:id/albums/:albumid',
    component: <AlbumContainer />,
    exact: true
  }
]

export default routes