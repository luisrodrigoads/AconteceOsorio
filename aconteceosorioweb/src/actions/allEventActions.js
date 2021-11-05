import axios from 'axios'

import BASE_URL from '../config/consts'


const ALL_EVENTS_FETCHED = 'ALL_EVENTS_FETCHED'
const EVENTS_BY_DATE = 'EVENTS_BY_DATE'

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

export const getEventsByDate = (dateEvent) => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/filterEventByDate/${dateEvent}`)
            .then(response => 
                dispatch({
                    type: EVENTS_BY_DATE,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}