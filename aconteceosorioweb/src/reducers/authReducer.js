const userKey = 'acontece_osorio'
const INITIAL_STATE ={
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TOKEN_VALIDATED':
            if(action.payload)
                return {...state, validToken: true}

            else{
                localStorage.removeItem(userKey)
                return {...state, validToken: false, user: null}
            }

        case 'TOKEN_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
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