import tokenService from './tokenService';
const BASE_URL = '/api/calendar/';




const getAllEvents = () => {
    
    const options = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + tokenService.getToken()
        })
    }
    return fetch(BASE_URL, options).then(res => res.json());
}
const deleteEvent = (eventId) => {
    const options = {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + tokenService.getToken()
        })
    }
    return fetch(BASE_URL + eventId, options).then(res => res.json());
}
const createEvent = (bodyText) => {
    const options = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: bodyText
    }
    return fetch(BASE_URL, options).then(res => res.json());
}

export default {
    getAllEvents,
    deleteEvent
}    

