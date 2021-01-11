import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import user from './userReducer'
import auth from './authReducer'

const rootReducer = combineReducers(
    {
        form: formReducer,
        toastr: toastrReducer,
        user,
        auth
    }
)

export default rootReducer;