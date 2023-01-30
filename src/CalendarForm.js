import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarForm = ({ calendarEvents, setCalendarEvents }) => {
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("09");
  const [startDate, setStartDate] = useState(new Date());

  const showWorkingHours = () => {
    const hours = 9;
    const totalHours = [];

    for (let i = 0; i < hours; i++) {
      const hour = (hours + i).toString();
      const element = (
        <option key={hour} value={hour}>
          {hour}
        </option>
      );
      totalHours.push(element);
    }
    return totalHours;
  };

  const resetStates = () => {
    setEventName("");
    setEventTime("09");
    setStartDate(new Date());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userDateInput = startDate.toISOString().substring(0, 10);

    let newTimeFormat = eventTime + ":00";

    newTimeFormat = userDateInput + "T" + newTimeFormat;

    console.log(eventTime);

    const newEvents = [...calendarEvents];
    newEvents.push({ title: eventName, start: newTimeFormat });

    setCalendarEvents(newEvents);
    resetStates();
  };

  return (
    <div className="form-container">
      <h2>Add Event</h2>

      <form onSubmit={onSubmit}>
        <div className="event-name-container">
          <label>Event Title</label>
          <div className="eventname-input">
            <input
              tabIndex={1}
              type="text"
              required
              value={eventName}
              name="eventName"
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
        </div>

        <div className="event-day-container">
          <label>Select Date </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div className="event-time-container">
          <label>Time </label>

          <div className="select">
            <select
              tabIndex={3}
              id="select"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            >
              {showWorkingHours()}
            </select>
          </div>
        </div>

        <div className="next">
          <input className="the-button" value="Add" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CalendarForm;
