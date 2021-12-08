import HomeContainer from "./containers/Home/HomeContainer"
import UserContainer from "./containers/User/UserContainer"

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
  }
]

export default routes