const events = [
  {
    title: "All Day Event",
    start: "2023-MONTH-01",
  },
  {
    title: "Long Event",
    start: "2023-MONTH-07",
    end: "2023-MONTH-10",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2023-MONTH-09T16:00:00+00:00",
    end: "2023-MONTH-09T16:30:00+00:00",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2023-MONTH-16T16:00:00+00:00",
  },
  {
    title: "Conference",
    start: "2023-MONTH-09T11:00:00+00:00",
    end: "2023-MONTH-09T13:30:00+00:00",
  },
  {
    title: "Meeting",
    start: "2023-MONTH-DAYT09:30:00+00:00",
    end: "2023-MONTH-DAYT11:30:00+00:00",
  },
  {
    title: "Lunch",
    start: "2023-MONTH-DAYT12:00:00+00:00",
  },
  {
    title: "Birthday Party",
    start: "2023-MONTH-21T07:00:00+00:00",
  },
  {
    url: "http://google.com/",
    title: "Click for Google",
    start: "2023-MONTH-28",
  },
  {
    title: "Meeting",
    start: "2023-MONTH-DAYT14:30:00+00:00",
  },
  {
    title: "Happy Hour",
    start: "2023-MONTH-DAYT17:30:00+00:00",
  },
  {
    title: "Dinner",
    start: "2023-MONTH-DAYT20:00:00+00:00",
  },
];

const today = new Date().toISOString().slice(0, 10).split("-");

const myEvents = events.map((date) => {
  date.start = date.start.replace("MONTH", today[1]);
  date.start = date.start.replace("DAY", today[2]);

  if (date.end) {
    date.end = date.end.replace("MONTH", today[1]);
    date.end = date.end.replace("DAY", today[2]);
  }

  return date;
});

export default myEvents;
