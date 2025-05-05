import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate  } from 'react-router'
import { authorizedRequest } from '../lib/api'

function EventDetail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [event, setEvent] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    const [userId, setUserId] = useState('1');
    const [eventId, setEventId] = useState(id)

    async function getSingleEvent() {
    // get the Event from the API
    // put the event in state
    try {
        // const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`)
        const response = await authorizedRequest('get', `/events/${id}`)
        setEvent(response.data)
    } catch (err) {
        console.log(err)
        if (err.status === 404) {
            // setErrorMsg('Event Not Found')
            navigate('/not-found')
        } else {
            setErrorMsg('Somethig went Wrong :-(')
        }
    }
}
useEffect(() => {
    getSingleEvent()
    console.log(id)
}, [])

// Start Delete Event Function
async function deleteEvent(){
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/events/${id}/`)

        if (response.status === 204){
            navigate('/')
        }

    } catch (err) {
        console.log(err)
    }
}


function showConfirmDelete(){
    setDeleteConfirm(true)
}
// End Delete Event Function

// Start Connect attendance registration button to backend API
async function attendanceRegistering() {
    console.log("Button clicked!"); 

    const payload = {
      user: userId,
      event_id: eventId,
      };

      console.log("eventId: ", eventId);
      
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/events/${eventId}/add-attendance/`, payload);
      if (response.status === 201) {
        console.log("Attendance registered successfully!");
        navigate('/');  
      }
    } catch (err) {
      console.log("Error: ", err.response.data);
    }
  }
  
//End Connect attendance registration button to backend API


if (errorMsg) return <h1>{errorMsg}</h1>
if (!event) return <h1>Loading your Post...</h1>

  return (
    <div>
        <h2>Event Detail Page</h2>
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.start_date} to {event.end_date}</p>
        <p><strong>Time:</strong> {event.start_time} - {event.end_time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Type:</strong> {event.event_type}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <button onClick={attendanceRegistering}>Register Attendance</button>
        {/* <button onClick={deleteEvent}>Delete</button> */}
        {
                deleteConfirm
                ?
                <button onClick={deleteEvent}>Are you Sure?</button>
                :
                <button onClick={showConfirmDelete}>Delete</button>
            }
    </div>
  )
}

export default EventDetail
