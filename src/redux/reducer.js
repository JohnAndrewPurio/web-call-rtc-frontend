import { USER_LOGIN, SET_ONLINE_USERS } from './action_types'

const initState = {
    currentUser: null,
    onlineUsers: [],
    otherUsers: []
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[USER_LOGIN] = userLogin
    selector[SET_ONLINE_USERS] = setOnlineUsers

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function userLogin(state, payload) {
    return {...state, currentUser: payload}
}

function setOnlineUsers(state, payload) {
    const { currentUser } = state

    return {...state, 
        otherUsers: payload.filter( user => user.name !== currentUser ), 
        onlineUsers: payload
    }
}