import React from "react";

function EventForm(props) {
  return (
    <div>
        <h2>Crate your Event</h2>
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Event Title</label>
                <input 
                id='title' 
                name='title' 
                type="text" 
                required 
                value={props.formInputs.title} 
                onChange={props.handleChange}
                />
            </div>
            <div>
                <label>Start Date</label>
                <input 
                id='start_date' 
                name='start_date' 
                type="date" 
                required 
                value={props.formInputs.start_date}
                onChange={props.handleChange}
                />
            </div>
            <div>
                <label>End Date</label>
                <input 
                id='end_date' 
                name='end_date'  
                type="date"
                required 
                value={props.formInputs.end_date}
                onChange={props.handleChange}
                />
            </div>
            <div>
                <label>Start Time</label>
                <input 
                id='start_time' 
                name='start_time' 
                type="time" 
                required
                value={props.formInputs.start_time}
                onChange={props.handleChange}
                />
            </div>
            <div>
                <label>End Time</label>
                <input 
                id='end_time' 
                name='end_time'  
                type="time" 
                required
                value={props.formInputs.end_time} 
                onChange={props.handleChange}
                />
            </div>
            <div>
                <label>Location</label>
                <input 
                id='location' 
                name='location' 
                type="text" 
                required 
                value={props.formInputs.location}
                onChange={props.handleChange}
                />
            </div>
            <div>
            <label>Event Type</label>
            <select 
            id="event_type" 
            name="event_type" 
            required
            value={props.formInputs.event_type}
            onChange={props.handleChange}
            >
            <option value="workshop">Workshop</option>
            <option value="course">Course</option>
            <option value="conference">Conference</option>
            <option value="seminar">Seminar</option> 
            {/* Online only */}
            <option value="webinar">Webinar</option> 
            <option value="meetup">Meetup</option>
            </select>
            </div>
            <div>
                <label>Description</label>
                <textarea 
                id='description' 
                name='description'
                value={props.formInputs.description}
                onChange={props.handleChange}
                ></textarea>
            </div>

            <div>
                <label>Notes</label>
                <textarea 
                id='notes' 
                name='notes'
                value={props.formInputs.notes}
                onChange={props.handleChange}
                ></textarea>
            </div>
            <button type="submit">Create Event</button>
            
        </form>
    </div>
)
}

export default EventForm
