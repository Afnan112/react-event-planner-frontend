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
            const response = await authorizedRequest('get', '/attendance/my_events');

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
    async function cancelAttendance(event_id) {
        console.log("Cancelling attendance for event ID:", event_id)
        try {
            const url = `http://127.0.0.1:8000/api/attendance/${event_id}/cancel/`
            const response = await authorizedRequest('delete', url);
            console.log("Response:", response);
            alert("Attendance successfully cancelled");
            setUserEvent(prevEvents => prevEvents.filter(event => event.id !== event_id))
        } catch (err) {
            console.log(err)
            alert("Error while canceling attendance")
        }
    }
    

return (
    <div>
        {userEvent.map((event) => (
            <div key={event.id}>
                <h3>{event.event_title}</h3>
                <button onClick={() => cancelAttendance(event.id)} >Cancle Attendance</button>
            </div>
        ))}
    </div>
  )

}

export default UserEvent
