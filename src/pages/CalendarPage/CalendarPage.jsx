import React, { useState, useEffect } from 'react';
import calendarService from '../../utils/calendarService'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import './CalendarPage.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from 'react-router-dom';

const localizer = momentLocalizer(moment);

const CalendarPage = (props) => {
    const [events, setEvents] = useState([{}])
    useEffect(()=>{
        calendarService.getAllEvents().then(res => {
            res.forEach(event => {
                event.start = moment(event.start).toDate()
                event.end = moment(event.end).toDate()

            });
            setEvents(res)
        })
    },[])
    return (
        <div className="App">
            <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "100vh" }}
            tooltipAccessor="description"
            />
        </div>
    )
}
  



export default CalendarPage;