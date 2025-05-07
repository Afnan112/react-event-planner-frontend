import React from 'react';
import EventList from "../components/EventList/EventList";
function EventsPage() {
  return (
    <div className="container mt-4">
      <h2>Available Events</h2>
      <EventList />
    </div>
  );
}

export default EventsPage;
