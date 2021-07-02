import { USER_LOGIN, SET_ONLINE_USERS } from './action_types'

export const userLogin = (payload) => ({
    type: USER_LOGIN,
    payload
})

export const setOnlineUsers = (payload) => ({
    type: SET_ONLINE_USERS,
    payload
})