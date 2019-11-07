import SingleCase from '@/views/single-case/index.vue'
import AttrListeners from '@/views/attr-listeners/index'
import KForm from '@/views/k-form/index'
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
    path: '/attrs-listeners',
    component: AttrListeners
  },
  {
    path: '/k-form',
    component: KForm
  }
]

export default [
  ...mainRouter
]
