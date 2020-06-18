import request from './request'

// 请求首页的导航
export const reqCateNavDatas =() => request.get('/cateNavDatas')
//获取首页的数据
export const reqIndexDatas = () => request.get('/indexDatas')
