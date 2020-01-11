import instance from './http'

function testGet(params){
    return instance({
        method: 'get',
        url: '/api/qqmusic/8446666/json',
        params
    })
}

function testPost(data){
    return instance({
        method: 'post',
        url: '',
        data
    })
}

export default {
    testGet,
    testPost
}