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
    setData(context, payload) {
      // 获取变化路由的参数
      const rootState = context.rootState
      const path = rootState.route.path
      // console.log(path)
      // 发送jsonp的请求, 获取数据
      jsonp(`https://api.douban.com/v2/movie${path}`, null, (err, data) => {
        if (err) {
          console.error(err.message)
        } else {
          context.commit({
            // type: 'setData',
            // title: data.title,
            // subjects: data.subjects
            type: 'setData',
            ...data
          })
        }
      })
    }
  }
}

export default movieList
