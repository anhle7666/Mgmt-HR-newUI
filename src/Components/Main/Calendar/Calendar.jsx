import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../../assets/scss/style.scss";
// import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
    {
        start: new Date(),
        end: new Date(),
        title: "Some title",
    },
];

const MyCalendar = (props) => (
    <div>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className="bg-base-300 min-h-screen text-base-content"
        />
    </div>
);

export default MyCalendar;
