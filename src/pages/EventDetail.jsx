import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'

import { authorizedRequest } from '../lib/api'

function EventDetail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [event, setEvent] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    const [eventId, setEventId] = useState(id)
    const [notes, setNotes] = useState([])
    const [showToast, setShowToast] = useState(false)

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
// Start get notes for this event

async function getNotes() {
    try {
        const response = await authorizedRequest('get', `/events/${id}/notes/`)
        setNotes(response.data)
    } catch (err) {
        console.log('Error loading notes:', err);
    }
}
// End get notes for this event

useEffect(() => {
    getSingleEvent()
    getNotes()
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
    console.log("Button clicked!")

    try {
    const response = await authorizedRequest('post', `/events/${eventId}/add-attendance/`)
    
    if (response.status === 201) {
        console.log("Attendance registered successfully!")

        setShowToast(true)

        setTimeout(() => {
            setShowToast(false)
            // navigate('/')
            navigate(`/events/${eventId}`)
        }, 3000)
    } 
    } catch (err) {
    console.log("Error: ", err.response.data)
    
    }
}

//End Connect attendance registration button to backend API

//Strat Cancle Attendance 
// async function cancelAttendance() {
//     console.log("Button clicked!")
//     try {
//         const response = await authorizedRequest('delete', `/attendance/${eventId}/cancel/`)
        
//         if (response.status === 204) {
//         console.log("Attendance canceled successfully!")
//         alert("Attendance canceled successfully!")
//         navigate('/');  
//         } 
//     } catch (err) {
//         console.log("Error: ", err.response.data)
        
//     }
//     }
// End Cancle Attendance 


if (errorMsg) return <h1>{errorMsg}</h1>
if (!event) return <h1>Loading your Post...</h1>

  return (
    
    <div className="container mt-5">
        {/* <h2>Event Detail Page</h2> */}
        <div className="card shadow p-4">
        <h2 className="card-title mb-4">{event.title}</h2>
        <p><strong>Date:</strong> {event.start_date} to {event.end_date}</p>
        <p><strong>Time:</strong> {event.start_time} - {event.end_time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Type:</strong> {event.event_type}</p>
        <p><strong>Description:</strong> {event.description}</p>
        
        {/* Start Add note */}
        <h4 className="mt-4">Notes:</h4>
        {/* condition ? expression_if_true : expression_if_false */}
        {notes.length > 0 ? (
            <ul className="list-group mb-4">
            {notes.map(note => (
                <li key={note.id} className="list-group-item">{note.content}</li>
                ))}
            </ul>
            ) : (
                <p>No notes for this event.</p>
            )}
        {/* End  Add note */}
        
        <div className="d-flex gap-2 flex-wrap"></div>
        <button onClick={attendanceRegistering} className="btn btn-success">Register Attendance</button>
        {/* <button onClick={cancelAttendance} className="btn btn-warning">Cancel</button>  */}
        {
                deleteConfirm
                ?
                <button onClick={deleteEvent}>Are you Sure?</button>
                :
                <button onClick={showConfirmDelete}>Delete</button>
            }
            <Link to ={`/events/${id}/edit`} className="btn btn-outline-primary">Edit this Event</Link>
        </div>
        {showToast && (
        <div
            className="toast show position-fixed top-0 end-0 m-4"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ zIndex: 9999 }}
        >
        <div className="d-flex">
            <div className="toast-body">
                You have successfully registered for the event!
            </div>
            <button
                type="button"
                className="btn-close btn-close-white ms-2"
                onClick={() => setShowToast(false)}
            ></button>
            </div>
        </div>
        )}
        </div>
    )
}

export default EventDetail
