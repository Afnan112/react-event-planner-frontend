import React from 'react'
import { useState } from 'react'
import EventForm from '../components/EventForm/EventForm'
import axios from 'axios'

function EventAdd() {
    /*
        Because I have many fields, I created a single state,
        and the "controlled-forms" lesson helped me a lot.
        In it, we learned how to use a single state for more than one field.
    */
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

    function handleChange(event){
        // console.log(event.target.name)
        // console.log(event.target.value)
        const currentData = {...formInputs} 
        currentData[event.target.name] = event.target.value
        setFormInputs(currentData)
        console.log(formInputs)
    }

    async function handleSubmit(event){
        event.preventDefault()
        console.log('Handle Submit is running')
        console.log(formInputs)
        const payload = formInputs
        const url = 'http://127.0.0.1:8000/api/events/'
        const response = await axios.post(url, payload)
        console.log(response)
    }

  return (
    <div>
      <h1>Event Add Page</h1>
      <EventForm
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  )
}

export default EventAdd
