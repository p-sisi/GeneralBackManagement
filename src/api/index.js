// 用于写后端的接口文件，这里比较简单就直接引入
import http from "@/utils/request";

//请求首页数据
export const getData = () => {
    //返回一个promise对象
    return http.get('/home/getData')
}

//请求用户列表数据
export const getUser = (params) => {
    // 返回用户列表
    return http.get('/user/getUser', params)
}

//提交增加学生数据
export const addUser = (data) => {
    return http.post('/user/add', data)
}

//提交编辑学生数据
export const editUser = (data) => {
    return http.post('/user/edit', data)
}

//提交删除学生数据
export const delUser = (data) => {
    return http.post('/user/del', data)
}