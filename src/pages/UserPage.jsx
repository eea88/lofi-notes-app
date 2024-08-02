import "./UserPage.css";
import { useState } from "react";

function UserPage() {
  const [events, setEvents] = useState([3,5,7,3,2]);
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
                <h2>Title of Event</h2>
                <p>Participants</p>
                <p>Date</p>
                <p>Description</p>
              </div>
            </li>
            
          );
        })}
      </ul>
    </section>
  );
}

export default UserPage;
