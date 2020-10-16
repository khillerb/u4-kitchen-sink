import React, { useState, useEffect } from 'react';
import calendarService from '../../utils/calendarService'
import './EventPage.css'
require('./cardbackground.svg')


const EventPage = (props) => {
    const [events, setEvents] = useState([{}]);
    const [formData, setFormData] = useState([]);
    useEffect(()=>{
        calendarService.getAllEvents().then(res => {
            setEvents(res)
        })
    },[]);
   
    const onDelete = (e) => {
        calendarService.deleteEvent(e.target.id).then(res => alert(`${res.body}`))
    }
    const onCreate = (e) => {
        console.log(e)
        const formData = {[e.target.name]: e.target.value};
        this.setState({
            formData
        })
        console.log(e.target)
        calendarService.deleteEvent(e.target.id).then(res => alert(`${res.body}`))
    }
    const eventList = events.map((event,idx) => (
        <div key={idx} className="card border-info bg-svg">
            <div className="card-header">{event.title}</div>
            <img src="./cardbackground.svg" class="card-img-top" alt=""></img>
            <div className="card-body bg-cleanup">
                <h5 className="card-title"> Time </h5>
                <p className="card-text"> {event.description} </p>
                <button href="#" onClick={onDelete} className="btn btn-danger btn-outline-warning" id={event._id}> Delete </button>
            </div>
        </div>
    ))
    const divStyle = {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "0"

    };
    return (
        <div>
            <button type="button" style={divStyle} className="btn btn-m btn-block btn-light btn-outline-info" data-toggle="collapse" data-target="#collapseCreate" aria-expanded="false" aria-controls="collapseCreate">Create Event</button>
            <form className="collapse" id="collapseCreate" onSubmit={onCreate}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">Title</span></div>
                    <input className="form-control" type="text" id="example-text-input"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">Start Time</span></div>
                    <input className="form-control" type="datetime-local" id="example-datetime-local-input"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">End Time</span></div>
                    <input className="form-control" type="datetime-local" id="example-datetime-local-input"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">Description</span></div>
                    <textarea className="form-control" aria-label="With textarea"></textarea>

                </div>
                <div className="input-group mb-3">
                    <input className="btn btn-s btn-block btn-light btn-outline-info" type="submit"></input>
                </div>
            </form>
            <div className="card-group">
                {eventList}
            </div>
        </div>
    );
}

export default EventPage;