import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './userReducer'
import auth from './authReducer'

const rootReducer = combineReducers(
    {
        form: formReducer,
        user,
        auth
    }
)

export default rootReducer;