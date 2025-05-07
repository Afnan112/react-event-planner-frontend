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
    

// return (
//     <div>
//         <h2>User's Event </h2>
//         {userEvent.map((event) => (
//             <div key={event.id}>
//                 <h3>{event.event_title}</h3>
//                 <button onClick={() => cancelAttendance(event.id)} >Cancle Attendance</button>
//             </div>
//         ))}
//     </div>
//   )
return (
    <div className="p-6 max-w-3xl mx-auto">
    {userEvent.length === 0 ? (
        <p className="text-center text-gray-500">You haven't registered for any events yet.</p>
    ) : (
        <div className="grid gap-4">
        {userEvent.map((event) => (
            <div
            key={event.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
            >
            <h3 className="text-xl font-semibold mb-2">{event.event_title}</h3>
            <button
                onClick={() => cancelAttendance(event.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"style={{ backgroundColor: "#328E6E", color: "white" }}
            >
                Cancel Attendance
            </button>
            </div>
        ))}
        </div>
    )}
    </div>
);

}

export default UserEvent
