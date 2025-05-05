import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router'

import { authorizedRequest } from '../lib/api'

function EventDetail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [event, setEvent] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    const [eventId, setEventId] = useState(id)

    // Start get a specific event's details
    async function getSingleEvent() {
    // get the Event from the API
    // put the event in state
    // Successful
    try {
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
// End get a specific event's details

// Start Delete Event Function
// Successful
async function deleteEvent(){
    try {
        const response = await authorizedRequest('delete', `/events/${id}/`)

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

    try {
      const response = await authorizedRequest('post', `/events/${eventId}/add-attendance/`);
      
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
            <Link to ={`/events/${id}/edit`}>Edit this Event</Link>
    </div>
  )
}

export default EventDetail
