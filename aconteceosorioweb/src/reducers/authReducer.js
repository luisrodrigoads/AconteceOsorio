const INITIAL_STATE ={
    user: {},
    validToken: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TOKEN_VALIDATED':
            if(action.payload)
                return {...state, validToken: true}

            else{
                return {...state, validToken: false, user: null}
            }

        case 'TOKEN_FETCHED':
            return {...state, user: action.payload, validToken: true}

        case 'LOGIN':
            return{
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}