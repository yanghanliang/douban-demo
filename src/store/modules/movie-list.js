import jsonp from 'jsonp'

const movieList = {
  // 开启命名空间
  namespaced: true,
  state: {
    title: '正在加载...',
    subjects: []
  },
  mutations: {
    // 不能执行异步操作
    setData(state, payload) {
      state.title = payload.title
      state.subjects = payload.subjects
    }
  },
  actions: {
    // 发送异步请求
    setData(context) {
      jsonp('https://api.douban.com/v2/movie/in_theaters', null, (err, data) => {
        console.log(data)
        context.commit({
          // type: 'setData',
          // title: data.title,
          // subjects: data.subjects
          type: 'setData',
          ...data
        })
      })
    }
  }
}

export default movieList
