const INITIAL_STATE = { artistList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ARTISTS_FETCHED':
            return { ...state, artistList: action.payload }

        default:
            return state
    }
}