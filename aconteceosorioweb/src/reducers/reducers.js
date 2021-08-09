import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import artists from './artistReducer'
import culturalPlaces from './culturalPlaceReducer'
import institutions from './institutionReducer'
import culturalPromoters from './culturalPromoterReducer'
import user from './userReducer'
import auth from './authReducer'

const rootReducer = combineReducers(
    {
        form: formReducer,
        toastr: toastrReducer,
        artists,
        culturalPlaces,
        institutions,
        culturalPromoters,
        user,
        auth
    }
)

export default rootReducer;