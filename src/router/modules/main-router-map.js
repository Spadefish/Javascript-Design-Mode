import SingleCase from '@/views/single-case/index.vue'
import AttrListeners from '@/views/attr-listeners/index'
export const mainRouter = [
  {
    path: '/',
    redirect: '/single-case'
  },
  {
    path: '/single-case',
    component: SingleCase
  },
  {
    path: '/attr-listeners',
    component: AttrListeners
  }
]

export default [
  ...mainRouter
]
