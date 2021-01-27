import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Routes from '../routes'
import {validatedToken} from '../actions/authActions'
import {Redirect} from 'react-router-dom'

const AuthOrApp = () => {
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user.personalInfo)

    useEffect(() => {

        console.log('user auth effect',auth.user)

		if (auth.user){
            console.log('validated token useeffect: ',validatedToken(auth.user));
            dispatch(validatedToken(auth.user))
        } 
            
            
    }, [])
    

    console.log(' auth user', auth.user);
    console.log(' auth validtoken', auth.validToken);
    if ((auth.user != null) && auth.validToken) {
		axios.defaults.headers.common['authorization'] = auth.user
		axios.defaults.headers.common['user_id'] = user._id
		axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
		axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type'
		axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
		axios.defaults.headers.common['Accept'] = 'application/json'
        console.log('logado!!!');
        return true;
    } else if (!auth.user) {
        console.log('deslogado!!!');
        return false;
    }
    console.log('deslogado!!!'); 

}

export default AuthOrApp