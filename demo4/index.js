import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch 参数为函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)

//
store.dispatch(selectSubreddit('reactjs'))

// 异步 action 创建函数对于做服务端渲染非常方便。你可以创建一个 store，dispatch 一个异步 action 创建函数，这个 action 创建函数又 dispatch 另一个异步 action 创建函数来为应用的一整块请求数据，同时在 Promise 完成和结束时才 render 界面。然后在 render 前，store 里就已经存在了需要用的 state。
store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)