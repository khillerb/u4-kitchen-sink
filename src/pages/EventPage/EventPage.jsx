import React, { useState, useEffect } from 'react';
import calendarService from '../../utils/calendarService';
import Event from '../../components/Event/Event';
import './EventPage.css'
require('./cardbackground.svg')


const EventPage = (props) => {
    const [events, setEvents] = useState([{}]);
    const [viewMode, setViewMode] = useState(true);
    const [formData, setFormData] = useState({});
    const [change, setChange] = useState({})
    useEffect(()=>{
        calendarService.getAllEvents().then(res => {
            setEvents(res)
        })
    },[props, change]);
   
    const onDelete = (id) => {
        calendarService.deleteEvent(id).then(res => setChange(!change))
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formData)
        calendarService.createEvent(formData).then(res => setChange(!change))
    }
    const divStyle = {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "0"

    };
    return (
        <div>
            <button type="button" style={divStyle} className="btn btn-m btn-block btn-light btn-outline-info" data-toggle="collapse" data-target="#collapseCreate" aria-expanded="false" aria-controls="collapseCreate">Create Event</button>
            <form className="collapse" id="collapseCreate" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">Title</span></div>
                    <input className="form-control" onChange={ evt => setFormData({...formData, ...{title: evt.target.value}})} name="title" type="text" id="example-text-input"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">Start Time</span></div>
                    <input className="form-control" onChange={ evt => setFormData({...formData, ...{start: evt.target.value}})} name="start" type="datetime-local" id="example-datetime-local-input"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">End Time</span></div>
                    <input className="form-control" onChange={ evt => setFormData({...formData, ...{end: evt.target.value}})} name="end"  type="datetime-local" id="example-datetime-local-input"></input>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">Description</span></div>
                    <textarea className="form-control" onChange={ evt => setFormData({...formData, ...{description: evt.target.value}})} name="description"  aria-label="With textarea"></textarea>

                </div>
                <div className="input-group mb-3">
                    <input className="btn btn-s btn-block btn-light btn-outline-info" type="submit"></input>
                </div>
            </form>
            <div className="card-group">
                {events.map((event, idx)=> (
                    <Event event={event} key={idx} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    );
}

export default EventPage;