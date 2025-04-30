import React from "react";

function EventForm() {
  return (
    <div>
        <h2>Crate your Event</h2>
        <form>
            <div>
                <label>Event Title</label>
                <input id='title' name='title' type="text" required />
            </div>
            <div>
                <label>Start Date</label>
                <input id='start_date' name='start_date' type="date" required />
            </div>
            <div>
                <label>End Date</label>
                <input id='end_date' name='end_date'  type="date"required />
            </div>
            <div>
                <label>Start Time</label>
                <input id='start_time' name='start_time' type="time" required />
            </div>
            <div>
                <label>End Time</label>
                <input id='end_time' name='end_time'  type="time" required />
            </div>
            <div>
                <label>Location</label>
                <input id='location' name='location' type="text" required />
            </div>
            <div>
                <label>Event Type</label>
                <input id='event_type' name='event_type' required />
            </div>
            <div>
                <label>Description</label>
                <textarea id='description' name='description' required></textarea>
            </div>

            <button type="submit">Create Event</button>
        </form>
    </div>
)
}

export default EventForm
