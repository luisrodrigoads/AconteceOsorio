import axios from 'axios';
import { toastr } from 'react-redux-toastr';

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
                    toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde')
                    
                else if(response.status === 200)
                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data
                    })
            }).catch(error => toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde'))
    }
}

export const updateToken = () => {
    return dispatch => {
        axios.get(`${ BASE_URL }/updateToken`)
            .then(response => {
                if(response.status === 202)
                    toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde')

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
            }).catch(error => toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde'))
    }
}

export const updateUser = values => {
    return dispatch => {
        
        dispatch({type: LOAD, payload: true})
        console.log('values action update user');
        console.log(...values);
        axios.post(`${ BASE_URL }/updateUser`, values)
            .then(response => {
                
                if(response.status !== 200){
                    
                    toastr.error('Erro ao atualizar usuário',response.data)
                    dispatch({type: LOAD, payload: false})

                } else if (response.status === 200){
                    toastr.success('Sucesso!','Usuário atualizado.')
                    
                    dispatch({
                        type: USER_FETCHED,
                        payload: response.data
                    })

                    dispatch({type:LOAD, payload: false})
                }
            }).catch(error => {
                toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde')
                dispatch({type: LOAD, payload: false})
            })
    }
}


export const updateUserImg = values => {
    return dispatch => {

        const requestConfig = {
            headers: {
              'accept': 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          }

        axios.post(`${ BASE_URL }/updateUserImg`, values, requestConfig)
            .then(response => {
                toastr.success('Sucesso!','Imagem atualizada.')
                dispatch({
                    type: USER_FETCHED,
                    payload: response.data
                })
            })
            .catch(error => {
                toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde')
            });

    }
}

export const disableUser = () => {
    return dispatch => {
        
        axios.post(`${ BASE_URL }/disableUser`)
            .then(response => {
                toastr.success('Sucesso!','Usuário está invisivel.')
                dispatch({
                    type: USER_FETCHED,
                    payload: response.data
                })
            })
            .catch(error => {
                toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde')
            });
    }
}

export const enableUser = () => {
    return dispatch => {

        axios.post(`${ BASE_URL }/enableUser`)
            .then(response => {
                toastr.success('Sucesso!','Usuário está visivel.')
                dispatch({
                    type: USER_FETCHED,
                    payload: response.data
                })
            })
            .catch(error => {
                toastr.error('Ocorreu um erro no servidor!', 'Tente mais tarde')
            });
    }
}