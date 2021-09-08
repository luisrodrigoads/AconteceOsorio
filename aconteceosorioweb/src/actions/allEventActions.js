import axios from 'axios'

import BASE_URL from '../config/consts'

const ALL_EVENTS_FETCHED = 'ALL_EVENTS_FETCHED'

export const getAllEvents = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/culturalEvents`)
            .then(response => 
                dispatch({
                    type: ALL_EVENTS_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}