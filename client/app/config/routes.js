/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/home',
    name: "home",
    meta: {auth: true},
    component: resolve => require(['../modules/home/'], resolve),
    children: [
      {
        path: 'dashboard',
        name: "home/dashboard",
        meta: {
          auth: true,
          title: ["dashboard"],
        },
        component: resolve => require(['../modules/dashboard/'], resolve)
      }
    ]
  },
  // {
  //   path: '*',
  //   meta: {auth: false},
  //   redirect: {name: 'dashboard'}
  // },
]
