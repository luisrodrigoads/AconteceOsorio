import axios from 'axios'

import BASE_URL from '../config/consts'

const ARTISTS_FETCHED = 'ARTISTS_FETCHED'

export const getArtists = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/artists`)
            .then(response => 
                dispatch({
                    type: ARTISTS_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}