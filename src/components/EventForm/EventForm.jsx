import React from "react";

function EventForm() {
  return (
    <div>
        <form>
            <div>
                <label>Event Title</label>
                <input id='title' name='title' required />
            </div>
            <div>
                <label>Start Date</label>
                <input id='start_date' name='start_date' required />
            </div>
            <div>
                <label>End Date</label>
                <input id='end_date' name='end_date' required />
            </div>
            <div>
                <label>Start Time</label>
                <input id='start_time' name='start_time' required />
            </div>
            <div>
                <label>End Time</label>
                <input id='end_time' name='end_time' required />
            </div>
            <div>
                <label>Location</label>
                <input id='location' name='location' required />
            </div>
            <div>
                <label>Event Type</label>
                <input id='event_type' name='event_type' required />
            </div>
            <div>
                <label>Description</label>
                <input id='description' name='description' required />
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default EventForm
