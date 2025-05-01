import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

import EventForm from '../components/EventForm/EventForm'


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

        async function getCurrentEventData() {
            const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}/`)
            console.log(response.data)
            setFormInputs(response.data)
        }
        useEffect(() => {
            getCurrentEventData()
        },[])
        
        async function handleSubmit(event) {
            event.preventDefault()
            const response = await axios.patch(`http://127.0.0.1:8000/api/events/${id}/`, formInputs)
            console.log(response.data)
            navigate(`/events/${id}`)
        }
        function handleChange(event){
            // console.log(event.target.name)
            // console.log(event.target.value)
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
