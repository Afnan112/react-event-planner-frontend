import React from "react";
import EventList from "../components/EventList/EventList";
import EventForm from "../components/EventForm/EventForm";
import homeImage from '../assets/images/Home.jpg'
function Home() {
return (
    <div>
    <h1>Welcom to the event planner App </h1>
    <img
        src={homeImage}
        alt="Event"
        className="img-fluid rounded"
        style={{ maxHeight: '400px' }}
    />
    {/* <EventList/> */}
    </div>
)
}

export default Home
