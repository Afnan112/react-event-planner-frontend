import React from "react";
import EventList from "../components/EventList/EventList";
import EventForm from "../components/EventForm/EventForm";
import homeImage from '../assets/images/Home.jpg'
function Home() {
return (
    <>
    <div style={{
        height: 'calc(100vh - 62px)',
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        }}>
        <h1>Welcom to the Event Planner App </h1>
        <p><strong>Login to join the Event</strong></p>
        {/* <EventList/> */}
    </div>
    </>
)
}

export default Home
