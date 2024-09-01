import service from '../request'
// 歌单详情页
export function getDetails(id) {
  return service({
    method: 'get',
    url: `/playlist/detail?id=${id}`
  })
}

//歌曲详情

export function getSongDetail(id) {
  return service({
    method: 'get',
    url: `/song/detail?ids=${id}`
  })
}

//歌词
export function getSongLyric(id) {
  return service({
    method: 'get',
    url: `/lyric?id=${id}`
  })
}

// 歌曲评论
export function getSongComment(id) {
  return service({
    method: 'get',
    url: `/comment/music?id=${id}`
  })
}
