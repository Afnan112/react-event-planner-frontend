import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

import EventForm from '../components/EventForm/EventForm'

import { authorizedRequest } from '../lib/api'


function EventEdit() {

    const [formInputs, setFormInputs] = useState({
            title: '',
            start_date: '',
            end_date: '',
            start_time: '',
            end_time: '',
            location: '',
            event_type: '',
            description: ''
        })
        const { id } = useParams()
        const navigate = useNavigate()

        // Successful
        async function getCurrentEventData() {
            // Send Get() to get event's details
            const response = await authorizedRequest('get', `/events/${id}/`)
            console.log(response.data)
            // Show it in the form so the user can edit it 
            setFormInputs(response.data)
        }

        useEffect(() => {
            getCurrentEventData()
        },[])

        // Successful
        async function handleSubmit(event) {
            event.preventDefault()
            const response = await authorizedRequest('patch', `/events/${id}/`, formInputs)
            console.log(response.data)
            // go eventdetails page
            navigate(`/events/${id}`)
        }

        // Successful
        function handleChange(event){
            console.log(event.target.name)
            console.log(event.target.value)
            // It copies the current data from the form (formInputs) to a new variable (currentData).
            const currentData = {...formInputs} 
            currentData[event.target.name] = event.target.value
            setFormInputs(currentData)
        }


  return (
    <div>
        <h2>Edit Event </h2>
        <EventForm
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        />
    </div>
  )
}

export default EventEdit
