import React, { useEffect } from 'react'
import { useState,  } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router'
import { authorizedRequest } from '../lib/api'

function UserEvent() {

    const [userEvent, setUserEvent] = useState([])
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    
    // View user's registered events
    async function getUserEvent() {
        try {
            const response = await authorizedRequest('get', 'http://127.0.0.1:8000/api/attendance/my_events');

            console.log(response.data)
            setUserEvent(response.data)
        }catch (err) {
            console.log(err)
            if (err.status === 404){
                navigate('/notFound')
            }else {
                setErrorMsg('Somethig went Wrong :-(')
            }
        }
        
    }

    useEffect(() => {
        getUserEvent()

    }, [])

    // Cancel user attendance for an event
    async function cancelAttendance(eventId) {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/attendance/${eventId}/cancel/`)
            console.log(response.data)
            alert("Attendance successfully cancelled")
            setUserEvent(userEvent.filter((event) => event.id !== eventId))
        } catch (err) {
            console.log(err)
            alert("Error while canceling attendance")
        }
    }
    

return (
    <div>
        <h2>User's Event </h2>
        {userEvent.map((event) => (
            <div key={event.id}>
                <h3>{event.title}</h3>
                <button onClick={() => cancelAttendance(event.id)} >Cancle Attendance</button>
            </div>
        ))}
    </div>
  )
}

export default UserEvent
