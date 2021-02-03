import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { validatedToken } from '../actions/authActions'


const AuthOrApp = () => {
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user.personalInfo)

    useEffect(() => {

        if (auth.user) {
            console.log('validated token useeffect: ', validatedToken(auth.user));
            dispatch(validatedToken(auth.user))
        }

    }, [auth, user, dispatch])

    if ((auth.user != null) && auth.validToken) {
        axios.defaults.headers.common['authorization'] = auth.user
        axios.defaults.headers.common['user_id'] = user._id
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type'
        axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.defaults.headers.common['Accept'] = 'application/json'
        return true;
    } else if (!auth.user) {
        return false;
    }

}

export default AuthOrApp