import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function EventDetail() {

    const { id } = useParams()
    const [event, setEvent] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    async function getSingleEvent() {
    // get the post from the API
    // put the post in state
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}`)
        setEvent(response.data)
    } catch (err) {
        console.log(err)
        if (err.status === 404) {
            setErrorMsg('Post Not Found')
        } else {
            setErrorMsg('Somethig went Wrong :-(')
        }
    }
}
useEffect(() => {
    getSingleEvent()
    console.log(id)
}, [])

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
    </div>
  )
}

export default EventDetail
