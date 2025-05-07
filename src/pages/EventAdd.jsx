import React from 'react'
import { useState } from 'react'
import EventForm from '../components/EventForm/EventForm'
import axios from 'axios'
import { useNavigate  } from 'react-router'

import { authorizedRequest } from '../lib/api'

function EventAdd() {
    /*
      Ref
        Because I have many fields, I created a single state,
        and the "controlled-forms" classwork helped me a lot
        to write this code. In it, we learned how to use a single state for more than one field.
    */
    const [formInputs, setFormInputs] = useState({
        title: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        location: '',
        event_type: '',
        description: '',
        notes: ''
    })
    const navigate = useNavigate()

    // Handle with one state, so need handleChange
    //Successful
    function handleChange(event){
        // console.log(event.target.name)
        // console.log(event.target.value)
        const currentData = {...formInputs} 
        currentData[event.target.name] = event.target.value
        setFormInputs(currentData)
        console.log(formInputs)
    }

    // Start Create a new event and navigate to home if successful
    // Successful
    async function handleSubmit(event){
        event.preventDefault()
        console.log('Handle Submit is running')
        console.log(formInputs)
        const payload = formInputs
        // use relative path.
        const url = '/events/'
        try {

          const response = await authorizedRequest('post', url, payload)
          console.log(response)

          if (response.status === 201) {
            console.log('Event successfully created:', response.data);
            const eventId = response.data.id;
            // Start Add notes to event
            if (formInputs.notes.trim() !== '') {
              const notePayload = {
                content: formInputs.notes
              }
              // const eventId = response.data.id
              try {
                await authorizedRequest('post', `/events/${eventId}/add-note/`, notePayload)
                console.log("Note successfully added")
              } catch (noteErr) {
                console.log("Failed to add note", noteErr);
              }
            }
            // End Add notes to event
              // After create event move on Home page 
              // navigate('/') 
              navigate(`/events/${eventId}`)
          } 

        } catch (err ){
          console.log("err", err)
        }
    }
// End  Create a new event and navigate to home if successful

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
