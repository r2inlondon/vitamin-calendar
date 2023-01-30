import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./App.css";
import { useState, useEffect } from "react";
import myEvents from "./eventsSeed";

function App() {
  const [calendarEvents, setCalendarEvents] = useState({});

  useEffect(() => {
    setCalendarEvents(myEvents);
  }, [calendarEvents]);

  return (
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
    />
  );
}

export default App;
