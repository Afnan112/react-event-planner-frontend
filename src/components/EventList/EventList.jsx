import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'


function EventList() {

    const [events, setEvents] = useState([])

    async function getAllEvents() {
         try {
            const response = await axios.get('http://127.0.0.1:8000/api/events/')
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
       <h2>Event List Page</h2>
       <h3>Events</h3>
       <ul>
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
       </ul>
    </div>
  )
}

export default EventList
