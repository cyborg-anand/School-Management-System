"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";


// Create a localizer using moment
const localizer = momentLocalizer(moment);

// Custom formats for displaying Monday as the first day of the week
moment.updateLocale("en", {
  week: {
    dow: 1, // Set Monday as the first day of the week (dow: day of week)
  },
});




const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WEEK);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
};

  return (
<Calendar
  localizer={localizer}
  events={calendarEvents}
  startAccessor="start"
  endAccessor="end"
  views={["week", "day"]}
  view={view}
  className="BigCalendar"
  style={{ height: '97vh', width: '100%' }} /* Update height and width */
  onView={handleOnChangeView}
  min={new Date(2025, 1, 0, 8, 0, 0)}
  max={new Date(2025, 1, 0, 17, 0, 0)}
/>
    
  );
};

export default BigCalendar;
