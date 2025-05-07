import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Link } from 'react-router'
import { authorizedRequest } from '../../lib/api'


function EventList() {

    const [events, setEvents] = useState([])

    async function getAllEvents() {
        try {
            // const response = await axios.get('http://127.0.0.1:8000/api/events/')
            const response = await authorizedRequest('get', '/events/')
            setEvents(response.data)
        } catch (err) {
            console.log('Error fetching events', err)
        }
    }

    useEffect(() => {
        getAllEvents()
    }, [])
    
return (
    <div>
      <div className="mb-3 text-end">
        <Link to="/events/add" className="btn btn-success">
          + Add New Event
        </Link>
      </div>
    {/* <h2>Event List Page</h2>
    <h3>Events</h3> */}
    {/* <ul>
            {events.map(event => {
                return (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.title}</Link>
                    </li> 
                )
                // <li key={event.id}>
                //     <h2>{event.title}</h2>
                //     <p><strong>Date:</strong> {event.start_date} to {event.end_date}</p>
                //     <p><strong>Time:</strong> {event.start_time} - {event.end_time}</p>
                //     <p><strong>Location:</strong> {event.location}</p>
                //     <p><strong>Type:</strong> {event.event_type}</p>
                //     <p><strong>Description:</strong> {event.description}</p>

                //     <button>Register Attendance</button>
                // </li>

                
            })}
    </ul> */}
    {/* <ul className="list-group">
            {events.map(event => (
        <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{event.title}</span>
            <Link to={`/events/${event.id}`} className="btn btn-primary btn-sm">
                View Details
            </Link>
            </li>
        ))}
</ul> */}

<div className="row">
  {events.map(event => (
    <div key={event.id} className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{event.title}</h5>
          {/* <p className="card-text">{event.description?.slice(0, 100)}...</p> */}
          <Link to={`/events/${event.id}`} className="btn mt-auto"
          style={{ backgroundColor: "#328E6E", color: "white" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
)
}

export default EventList
