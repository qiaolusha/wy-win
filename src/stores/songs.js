import { defineStore } from 'pinia'
// import { getSongLyric } from '../api/request/listdetails'

export const useMusicStore = defineStore('music', {
  state: () => ({
    playList: [
      {
        al: {
          id: 131776923,
          pic: 109951166281668670,
          picUrl: 'http://p2.music.126.net/_EF-MUXiGgWvwyac6cAQRA==/109951166281668669.jpg',
          pic_str: '109951166281668669'
        },
        name: '森林与海的夏日情诗',
        id: 1869390986
      }
    ],
    playListIndex: 0, //默认下标为0
    noPlay: true, //默认暂停
    noplay: true,
    ifLogin: false
  }),
  actions: {
    updateNoPlay: function (value) {
      this.noPlay = value
    },
    updateNoplay: function (value) {
      this.noplay = value
    },
    updatePlayList: function (value) {
      this.playList = value
      // console.log(this.playList)
    },
    updateplayListIndex: function (value) {
      this.playListIndex = value
    }
  },
  getters: {}
})
