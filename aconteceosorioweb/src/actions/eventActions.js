import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const EVENTS_FETCHED = 'EVENTS_FETCHED'

export const getEvents = () => {
	return dispatch => {
		axios
			.get(`${BASE_URL}/userEvents`)
			.then(response =>
				dispatch({
					type: EVENTS_FETCHED,
					payload: response.data.result
				})
			)
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const deleteEvent = id => {
	return dispatch => {
		axios
			.get(`${BASE_URL}/deleteEvent/${id}`)
			.then(response =>
				dispatch(getEvents())
			)
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const postEvent = values => dispatch => {
	axios
		.post(`${BASE_URL}/culturalEvent`, values/*, {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}*/)
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
				dispatch(reset('newReportForm'))
				window.location = '/InitialUserPage'          
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
			}
		})
		.catch(error => toastr.error('Erro!', 'Internal server error'))
}

