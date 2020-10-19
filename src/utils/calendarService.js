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
const createEvent = (body) => {
    const options = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(body)
    }
    return fetch(BASE_URL, options).then(res => res.json());
}
const updateEvent = (body) => {
    console.log(body)
    const options = {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(body)
    }
    return fetch(BASE_URL + body._id, options).then(res => res.json());
}

export default {
    getAllEvents,
    deleteEvent,
    createEvent,
    updateEvent
}    

