import "./UserPage.css";
import { useState } from "react";
import supabase from "../supabase/config";
import { useEffect } from "react";
import WarningEvent from "../components/WarningEvent";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UserPage() {
  const [events, setEvents] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const { userId } = useParams();

  function getEvents() {
    supabase
      .from("events")
      .select()
      .then((response) => setEvents(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getEvents();
  }, []);

  function deleteEvent(id) {
    // First, delete all the tasks that reference the event
    supabase
      .from("tasks")
      .delete()
      .eq("event", id)
      .then(() => {
        // Once the tasks have been deleted, delete the event
        supabase
          .from("events")
          .delete()
          .eq("id", id)
          .then(() => {
            setShowWarning(false);
            getEvents();
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  const displayWarning = (id) => {
    console.log("Display warning");
    setShowWarning(true);
    setIdToDelete(id);
  };

  /*  in the UserPage (maybe also Event details page ) add the code:
<button onClick={() => displayWarning(id)}>🗑️</button> */

  return (
    <section className="user-page-section">
      <div className="create-event-container">
        <Link to={`/users/${userId}/events/create`}>
          <button>Create New Event</button>
        </Link>
      </div>

      <ul className="events-container">
        {events.map((eachEvent) => {
          return (
            <div className="event-relative" key={eachEvent.id}>
              <Link
                
                to={`/users/${userId}/events/${eachEvent.id}`}
              >
                <li className="event-card">
                  <div>
                    <h2>{eachEvent.title}</h2>
                    <h3>{eachEvent.date}</h3>
                    <h3>{eachEvent.participants}</h3>
                    {/* <p>{eachEvent.description}</p> */}
                  </div>
                </li>
              </Link>
              <button
                className="delete-button"
                onClick={() => displayWarning(eachEvent.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>

      {showWarning && (
        <WarningEvent
          deleteEvent={deleteEvent}
          idToDelete={idToDelete}
          setShowWarning={setShowWarning}
        />
      )}
    </section>
  );
}

export default UserPage;
