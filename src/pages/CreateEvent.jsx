import "./CreateEvent.css";
import { useState, useEffect } from "react";
import supabase from "../supabase/config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchUsers from "../components/SearchUsers";
import { useParams } from 'react-router-dom';

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  /* const [userId, setUserId] = useState(1); */
  const [guests, setGuests] = useState([]);
  const [participants, setParticipants] = useState([]); 
  const navigate = useNavigate();
  const {userId} = useParams()

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
      date,
      participants: guests,
    };
    console.log(newEvent);

    supabase
      .from("events")
      .insert(newEvent)
      .select()
      .then((response) => {
        console.log(response.data[0].id);
        navigate(`/users/${userId}/events/${response.data[0].id}`);
      })
      .catch((error) => console.error(error));
  };

  function handleGuests(event,participant){
    const newGuests = structuredClone(guests)
    if(event.target.checked){
      
      newGuests.push(participant.username)
      setGuests(newGuests)
  }else{
    const index = newGuests.indexOf(participant.username)
    newGuests.splice(index,1)
      setGuests(newGuests)
  }
  }
  

  function getParticipants() {
    supabase
      .from("users")
      .select()
      .then((response) => {
        console.log(response.data);
        setParticipants(response.data);
      })
      .catch((error) => console.error(error));
  }


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
        <SearchUsers getParticipants={getParticipants} setParticipants={setParticipants} />
           <div className="participants-search">
          {participants?.map((participant) => (
            <div key={participant.id}>
              <input
                type="checkbox"
                id={participant.username}
                name="user_name"
                value={participant.username}
                checked={guests.includes(participant.username)}
                onChange={(event)=>handleGuests(event, participant)}
              />
              <label htmlFor={participant.username}>{participant.username}</label>
            </div>
          ))}        
        </div>
        <label>
          You can also share the event with friends via Whatsapp
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
