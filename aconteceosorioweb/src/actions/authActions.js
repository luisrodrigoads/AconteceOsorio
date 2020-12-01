import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import {reset} from 'redux-form'

import BASE_URL from '../config/consts'

const USER_FETCHED = 'USER_FETCHED'
const TOKEN_VALIDATED = 'TOKEN_VALIDATED'
const TOKEN_FETCHED = 'TOKEN_FETCHED'
const LOGIN = 'LOGIN'

export const login = values => {
    return dispatch => {
        dispatch({type: LOGIN, payload: true})
        axios
            .post(`${BASE_URL}/login`,values)
            .then(response => {
                if(response.status === 202){
                    //toastr.error('erro no login web!',response.data)
                    dispatch({type: LOGIN, payload: false})
                }else if(response.status === 200){

                    axios.defaults.headers.common['authorization'] = response.data.token 
                    axios.defaults.headers.common['user_id'] = response.data.result.user_id

                    dispatch(reset('formLogin'))

                    dispatch({
                        type: TOKEN_FETCHED,
                        payload: response.data.token
                    })

                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data.result
                    })

                    dispatch({type: LOGIN, payload: false})
                }
            })
            .catch(error => {
                dispatch({type: LOGIN, payload: false})
                //toastr.error('Erro!', 'Internal server error')
                console.log('Erro no catch do login web!!!',error)
            })

    }
}

export const signup = values => {
    console.log(values);
    values.type = values.type.value;

    return dispatch => {
        axios
            .post(`${BASE_URL}/signup`,values)
            .then(response => {
                if(response.status === 202)
                    console.log('Erro no signup web!!!',response.data)
                else if(response.status === 200){
                    console.log('Sucesso no signup!!!',response.data)
                }
            })
            .catch(error => console.log('Erro no catch do signup web!!!',error))
    }
}

export const logout = () => {
    return{
        type: TOKEN_VALIDATED,
        payload: false
    }
}

export const validatedToken = token => {
    return dispatch => {
        token ?
            axios
                .post(`${BASE_URL}/validateToken`,{token})
                .then(response => 
                    dispatch({
                        type: TOKEN_VALIDATED,
                        payload: response.data.valid
                    })    
                )
                .catch(error =>
                    dispatch({
                        type: TOKEN_VALIDATED,
                        payload: false
                    })    
                )
            : dispatch({
                type: TOKEN_VALIDATED,
                payload: false
            })
    }
}