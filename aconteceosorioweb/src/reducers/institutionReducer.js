const INITIAL_STATE = { institutionList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INSTITUTIONS_FETCHED':
            return { ...state, institutionList: action.payload }

        default:
            return state
    }
}