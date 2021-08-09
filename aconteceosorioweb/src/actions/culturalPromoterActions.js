import axios from 'axios'

import BASE_URL from '../config/consts'

const CULTURALPROMOTERS_FETCHED = 'CULTURALPROMOTERS_FETCHED'

export const getCulturalPromoters = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/culturalPromoters`)
            .then(response => 
                dispatch({
                    type: CULTURALPROMOTERS_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}