import "./UserPage.css";
import { useState } from "react";
import supabase from "../supabase/config";
import { useEffect } from "react";

function UserPage() {
  const [events, setEvents] = useState([]);


  function getEvents() {
    supabase
      .from("events")
      .select()
      .then((response) => setEvents(response.data))
      .catch ((error) => console.error(error))
  }


 useEffect (()=>{
  getEvents() 
},[]);  



  return (
    <section className="user-page-section">
      <div className="create-event-container">
        <button>Create Event</button>
      </div>

      <ul className="events-container">
        {events.map((eachEvent) => {
          return (
            <li className="event-card">
              <div>
                <h2>{eachEvent.title}</h2>
                <p>{eachEvent.description}</p>
              </div>
            </li>
            
          );
        })}
      </ul>
    </section>
  );
}

export default UserPage;
