const INITIAL_STATE = { eventUserList: [{}]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'PUBLIC_USER_EVENTS':
            return {...state, eventUserList: action.payload}
        
        default:
            return state
    }
}