import { request, config } from 'utils'

const { api } = config
const { users,insertUsers,updateUsers,removeUsers } = api

export function query (params) {
  return request({
    url: users,
    method: 'get',
    data: params,
  })
}  

export function insert (params) {
  return request({
    url: insertUsers,
    method: 'post',
    data: params,
  })
} 

export function update (params) {
  return request({
    url: updateUsers,
    method: 'post',
    data: params,
  })
} 
export function remove (params) {
  return request({
    url: removeUsers,
    method: 'post',
    data: params,
  })
}
