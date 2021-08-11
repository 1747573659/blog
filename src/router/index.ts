interface Router {
  component: any
  path: string
}
const RouterList: Router[] = [
  {
    component: () => import('../pages/home'),
    path: '/home'
  },
  {
    component: () => import('../pages/login'),
    path: '/home'
  },
]
const RouterMap = () => {
}

export default RouterMap