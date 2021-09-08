const INITIAL_STATE = { eventList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ALL_EVENTS_FETCHED':
            return { ...state, eventList: action.payload }

        default:
            return state
    }
}