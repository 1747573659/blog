interface Router {
  component: any
  path: string
}
const RouterList: Router[] = [
  {
    component: () => import('../pages/Home'),
    path: '/home'
  },
  {
    component: () => import('../pages/Login'),
    path: '/home'
  },
]
const RouterMap = () => {
}

export default RouterMap