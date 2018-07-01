import jsonp from 'jsonp'

const movieDetail = {
  // 开启命名空间
  namespaced: true,
  state: {
    movie: {}
  },
  mutations: {
    setMovie(state, payload) {
      state.movie = payload.movie
    }
  },
  actions: {
    getMovieById(context) {
      // 从路由地址中获取访问的接口地址
      const rootState = context.rootState
      const id = rootState.route.params.id
      jsonp(`https://api.douban.com/v2/movie/subject/${id}`, null, (err, data) => {
        if (err) {
          return
        }
        context.commit({
          type: 'setMovie',
          movie: data
        })
      })
    }
  }
}

export default movieDetail