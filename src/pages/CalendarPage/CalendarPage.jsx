import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import './CalendarPage.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarPage extends Component {
    state = {
        events: []
    }
    
    render(){
        return (
            <div>
                <Calendar
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}