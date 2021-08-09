import axios from 'axios'

import BASE_URL from '../config/consts'

const INSTITUTIONS_FETCHED = 'INSTITUTIONS_FETCHED'

export const getInstitutions = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/institutions`)
            .then(response => 
                dispatch({
                    type: INSTITUTIONS_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}