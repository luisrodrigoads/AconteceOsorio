const INITIAL_STATE = { culturalEvents: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'EVENTS_FETCHED':
            return { ...state, culturalEvents: action.payload }

        default:
            return state
    }
}