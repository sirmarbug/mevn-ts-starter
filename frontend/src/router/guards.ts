import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const isLogin = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const logged = localStorage.getItem('token')
  if (logged) {
    next()
  } else {
    next({ name: 'Login' })
  }
}

export const isNotLogin = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const logged = localStorage.getItem('token')
  if (logged) {
    next({ name: 'Home' })
  } else {
    next()
  }
}
