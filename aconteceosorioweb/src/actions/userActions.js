import axios from 'axios';

import BASE_URL from '../config/consts'

const USER_FETCHED = 'USER_FETCHED'
const TOKEN_FETCHED = 'TOKEN_FETCHED'
const LOAD = 'LOAD'

export const tradeTokenToUser = token => {
    const tokenID = token ? token : axios.defaults.headers.common['authorization'] 

    return dispatch => {
        axios.post(`${ BASE_URL }/tradeTokenToUser`, tokenID)
            .then(response => {
                if(response.status === 400)
                    console.log('Erro no tradetokentouser web!!!',response)
                    
                else if(response.status === 200)
                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data
                    })
            }).catch(error => console.log('Erro no catch do tradetokentouser web!!!',error))
    }
}

export const updateToken = () => {
    return dispatch => {
        axios.get(`${ BASE_URL }/updateToken`)
            .then(response => {
                if(response.status === 202)
                    console.log('Erro no updateToken web!!!',response.data)

                else if(response.status === 200){
                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data.result
                    })
                    dispatch({
                        type: TOKEN_FETCHED,
                        payload: response.data.token
                    })
                }
            }).catch(error => console.log('Erro no catch do updatetoken',error))
    }
}

export const updateUser = values => {
    return dispatch => {
        dispatch({type: LOAD, payload: true})
        axios.post(`${ BASE_URL }/updateUser`, values)
            .then(response => {
                if(response.status === 202){
                    console.log('Erro no updateuser', response.data)
                    dispatch({type: LOAD, payload: false})
                }else if(response.status === 200){
                    console.log('Sucesso! Usuário atualizado.')

                    axios.defaults.headers.common['authorization'] = response.data.token
                    axios.defaults.headers.common['user_id'] = response.data.result._id
                    
                    dispatch({
                        type: TOKEN_FETCHED,
                        payload: response.data.token
                    })

                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data.result
                    })

                    dispatch({type:LOAD, payload: false})
                }
            }).catch(error => {
                console.log('Erro no catch do updateuser',error)
                dispatch({type: LOAD, payload: false})
            })
    }
}