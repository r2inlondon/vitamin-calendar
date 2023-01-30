import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./App.css";
import { useState, useEffect, Fragment } from "react";
import myEvents from "./eventsSeed";
import CalendarForm from "./CalendarForm";

function App() {
  const [calendarEvents, setCalendarEvents] = useState([]);

  return (
    <Fragment>
      <div className="calendar-container">
        <FullCalendar
          timeZone={"UTC"}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          plugins={[dayGridPlugin, timeGridPlugin]}
          events={calendarEvents}
          slotMinTime={"09:00"}
          slotMaxTime={"18:00"}
          height="100%"
          duration={"01:00"}
        />
      </div>
      <CalendarForm
        calendarEvents={calendarEvents}
        setCalendarEvents={setCalendarEvents}
      />
    </Fragment>
  );
}

export default App;
