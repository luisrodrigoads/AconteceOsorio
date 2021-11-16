import axios from 'axios'

import BASE_URL from '../config/consts'

const PUBLIC_USER_EVENTS = 'PUBLIC_USER_EVENTS';

export const getEventsByPublicUser = (id) => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/eventByPublicUser/${id}`)
            .then(response => 
                dispatch({
                    type: PUBLIC_USER_EVENTS,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}