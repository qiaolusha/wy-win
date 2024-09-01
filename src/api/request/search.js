import service from '../request'
export function getDefault() {
  return service({
    method: 'get',
    url: `/search/default`
  })
}

export function getHot() {
  return service({
    method: 'get',
    url: `/search/hot/detail`
  })
}

export function getTopList() {
  return service({
    method: 'get',
    url: `/toplist`
  })
}

export function getSearch(word) {
  return service({
    method: 'get',
    url: `/search?keywords=${word}`
  })
}
