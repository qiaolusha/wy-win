import service from '../request'
// export function getVideoGroup() {
//   return service({
//     method: 'get',
//     url: `/video/group/list`
//   })
// }

export function getVideos() {
  return service({
    method: 'get',
    url: `/video/timeline/all`
  })
}
