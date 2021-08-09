const INITIAL_STATE = { culturalPlaceList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CULTURALPLACES_FETCHED':
            return { ...state, culturalPlaceList: action.payload }

        default:
            return state
    }
}