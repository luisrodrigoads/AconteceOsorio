import axios from 'axios'

import BASE_URL from '../config/consts'

const CULTURALPLACES_FETCHED = 'CULTURALPLACES_FETCHED'

export const getCulturalPlaces = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/culturalPlaces`)
            .then(response => 
                dispatch({
                    type: CULTURALPLACES_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}