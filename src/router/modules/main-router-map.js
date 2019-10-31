import SingleCase from '@/views/single-case/index.vue'
export const mainRouter = [
  {
    path: '/',
    redirect: '/single-case'
  },
  {
    path: '/single-case',
    component: SingleCase
  },
]

export default [
  ...mainRouter
]
