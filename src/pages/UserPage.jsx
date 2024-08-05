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

  function deleteEvent (id) {
    //console.log("Attempting to delete event with ID:", id); // Debugging log
    supabase
      .from("events")
      .delete()
      .eq("id", id)
      .then(
        () => {setShowWarning(false);
         getEvents() }
      )
      .catch((error) => console.error(error));
  };

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
            <li key={eachEvent.id} className="event-card">
              <div>
                <h2>{eachEvent.title}</h2>
                <p>{eachEvent.description}</p>
                <button onClick={() => displayWarning(eachEvent.id)}>❌</button>
              </div>
            </li>
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
