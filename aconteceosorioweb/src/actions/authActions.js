import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import {reset} from 'redux-form'

import BASE_URL from '../config/consts'

const USER_FETCHED = 'USER_FETCHED'
const TOKEN_VALIDATED = 'TOKEN_VALIDATED'
const TOKEN_FETCHED = 'TOKEN_FETCHED'
const LOGIN = 'LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'

export const login = values => {
    return dispatch => {
        dispatch({type: LOGIN, payload: true})
        axios
            .post(`${BASE_URL}/login`,values)
            .then(response => {
                if(response.status === 202){
                    toastr.error('Erro no login!',response.data)
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
                toastr.error('Erro!', 'Internal server error')
                //console.log('Erro no catch do login web!!!',error)
            })

    }
}

export const instituteSignup = values => {
    
    return dispatch => {
        axios
            .post(`${BASE_URL}/signup`,values, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(response => {
                if(response.status === 202)
                    toastr.error('Erro!',response.data)
                else if(response.status === 200){
                    if(values.userType === 'INSTITUTION'){
                        toastr.success('Sucesso!','Instituição cadastrada.')
                        dispatch(reset('formRegisterUser'))  
                    } else if(values.userType === 'CULTURAL_PLACE'){
                        toastr.success('Sucesso!','Espaço cultural cadastrado.')
                        dispatch(reset('formRegisterCulturalPlace'))
                    }
                        
                }
            })
            .catch(error => toastr.error('Erro!','Internal server error'))
    }
}

export const logout = () => {
    return dispatch => {

        axios.defaults.headers.common['authorization'] = ''; 
        axios.defaults.headers.common['user_id'] = '';

        dispatch({
            type: TOKEN_VALIDATED,
            payload: false
        })    

        dispatch({
            type: USER_LOGOUT,
            payload: null
        })

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