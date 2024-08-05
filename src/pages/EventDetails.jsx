import "./EventDetails.css";
import supabase from "../supabase/config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function getEvent() {
    supabase
      .from("events")
      .select()
      .eq("id", eventId)
      .then((response) => setEvent(response.data[0]))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    setTitle(event.title);
    setDescription(event.description);
  }, [event]);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    supabase
      .from("events")
      .update({ title, description })
      .eq("id", eventId)
      .then((response) => {
        setIsEditing(false);
        setEvent(response.data[0]);
      })
      .catch((error) => console.error(error));
  };

  if (isEditing) {
    return (
      <ul className="event-detail-container">
        <li className="event-card-container">
          <form onSubmit={handleSubmission}>
            <div className="form-container">
              <label className="text-inputs">Title</label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <label className="text-inputs">Description</label>
              <textarea
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="edit-button-container">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </form>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="event-detail-container">
        <li className="event-card-container">
          <h2>{event.title}</h2>
          <p>{event.description}</p>

          <div className="task-container">
            <div className="task">
              <img src="" alt="" />
              <p>Participant: Buy Beer & cigarretes.</p>
              <div className="check-box-container">
                <input type="checkbox" />
              </div>
            </div>
            <div className="task">
              <img src="" alt="" />
              <p>Participant: Buy Beer & cigarretes.</p>
              <div className="check-box-container">
                <input type="checkbox" />
              </div>
            </div>
            <button className="add-task-button">+</button>
          </div>

          <div className="edit-button-container">
            <button onClick={handleEditClick}>Edit</button>
          </div>
        </li>
      </ul>
    );
  }
}

export default EventDetails;
