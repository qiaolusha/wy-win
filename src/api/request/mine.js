import service from '../request'
export function getUserDetails() {
  return service({
    method: 'get',
    url: `/user/detail?uid=1767169386`
  })
}

export function getUserSub() {
  return service({
    method: 'get',
    url: `/user/playlist?uid=1767169386`
  })
}
