import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'

//定义mock请求拦截,第一个参数是请求路径（后端提供），第二个参数是请求方法get/post，默认是get不用写，第三个参数是请求拦截到之后的操作函数（后端提供）
//这里直接调用这个方法，可以拿到方法所暴露出来的所有数据
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

// 用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser) //添加用户
Mock.mock('/api/user/edit', 'post', user.updateUser) //编辑用户信息
Mock.mock('/api/user/del', 'post', user.deleteUser) //删除用户
Mock.mock(/api\/user\/getUser/, user.getUserList) // 获取用户列表信息