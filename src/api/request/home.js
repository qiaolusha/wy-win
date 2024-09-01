import service from '../request'
// 轮播图
export function getBanner() {
  return service({
    method: 'get',
    url: '/banner?type=2'
  })
}
// 推荐歌单
export function getRecommend() {
  return service({
    method: 'get',
    url: '/personalized?limit=10'
  })
}
