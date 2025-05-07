import React from "react";

function EventForm(props) {
  return (
    <div className="container mt-4">
        <h2 className="mb-4">Create Event</h2>
        <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Event Title</label>
                <input 
                id='title' 
                name='title' 
                type="text" 
                required 
                className="form-control"
                value={props.formInputs.title} 
                onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="start_date" className="form-label">Start Date</label>
                <input 
                id='start_date' 
                name='start_date' 
                type="date" 
                required 
                className="form-control"
                value={props.formInputs.start_date}
                onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="end_date" className="form-label">End Date</label>
                <input 
                id='end_date' 
                name='end_date'  
                type="date"
                required 
                className="form-control"
                value={props.formInputs.end_date}
                onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="start_time" className="form-label">Start Time</label>
                <input 
                id='start_time' 
                name='start_time' 
                type="time" 
                required
                className="form-control"
                value={props.formInputs.start_time}
                onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="end_time" className="form-label">End Time</label>
                <input 
                id='end_time' 
                name='end_time'  
                type="time" 
                required
                className="form-control"
                value={props.formInputs.end_time} 
                onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input 
                id='location' 
                name='location' 
                type="text" 
                required 
                className="form-control"
                value={props.formInputs.location}
                onChange={props.handleChange}
                />
            </div>

            <div className="mb-3">
            <label htmlFor="event_type" className="form-label">Event Type</label>
            <select 
            id="event_type" 
            name="event_type" 
            required
            className="form-select"
            value={props.formInputs.event_type}
            onChange={props.handleChange}
            >
            <option value="">-- Select Event Type --</option>
            <option value="workshop">Workshop</option>
            <option value="course">Course</option>
            <option value="conference">Conference</option>
            <option value="seminar">Seminar</option> 
            {/* Online only */}
            <option value="webinar">Webinar</option> 
            <option value="meetup">Meetup</option>
            </select>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea 
                id='description' 
                name='description'
                className="form-control"
                rows="3"
                value={props.formInputs.description}
                onChange={props.handleChange}
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="notes" className="form-label">Notes</label>
                <textarea 
                id='notes' 
                name='notes'
                className="form-control"
                rows="3"
                value={props.formInputs.notes}
                onChange={props.handleChange}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Create Event</button>
            
        </form>
    </div>
)
}

export default EventForm
