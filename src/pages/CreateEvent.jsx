import "./CreateEvent.css";
import { useState, useEffect } from "react";
import supabase from "../supabase/config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchUsers from "../components/SearchUsers";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [userId, setUserId] = useState(1);
  const [searchParticpants, setSearchPartipants] = useState("");
  const [participants, setParticipants] = useState([]); 
  const navigate = useNavigate();

  const postNewEvent = (event) => {
    event.preventDefault();
    //id, created at and user are missing
    /* setCount (count +1);
    setId (count);  */
    /* setCreatedAt(Date.now()) */
    const newEvent = {
      /*id , created_at: createdAt */ title,
      description,
      user_id: userId,
    };
    console.log(newEvent);

    supabase
      .from("events")
      .insert(newEvent)
      .select()
      .then((response) => {
        console.log(response.data[0].id);
        navigate(`./users/${userId}/events/${response.data[0].id}`);
      })
      .catch((error) => console.error(error));
  };

  

  

  return (
    <section className="create-event-section">
      <div className="title-create-event">
        <h2> Let's create an Event!</h2>
      </div>
      <form className="event-form" onSubmit={postNewEvent}>
        <label> What's the name of your event?</label>
        <input
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <label> When is your event?</label>
        <input
          className="form-short-input"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          type="date"
        />
        <label htmlFor="participantSearch"> Who is coming?</label>
        <input
          id="participant.Search"
          value={searchParticpants}
          onChange={(event) => {
            const query = event.target.value
            setSearchPartipants(query);
            searchForParticpants(query)
            console.log(event.target.value);
          }}
          type="text"
        />
           <div className="participants-search">
          {participants.map((participant) => (
            <div key={participant.id}>
              <input
                type="checkbox"
                id={participant.username}
                name="user_name"
                value={participant.username}
              />
              <label htmlFor={participant.username}>{participant.username}</label>
            </div>
          ))}        
        </div>
        <label>
          If you could not find them or they have not joined you can just share
          the event with them via Whatsapp
        </label>
        <label> What is your event about?</label>
        <textarea
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
        />

        <button>Submit</button>
      </form>
      <Link to="/">
        <button className="goback-btn">Go back</button>
      </Link>
    </section>
  );
}

export default CreateEvent;
