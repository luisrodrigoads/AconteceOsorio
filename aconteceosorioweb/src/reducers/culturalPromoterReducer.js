const INITIAL_STATE = { culturalPromoterList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CULTURALPROMOTERS_FETCHED':
            return { ...state, culturalPromoterList: action.payload }

        default:
            return state
    }
}