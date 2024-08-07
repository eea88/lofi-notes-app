import "./EventDetails.css";
import supabase from "../supabase/config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "../components/TaskForm";
import WarningTask from "../components/WarningTask";
import SearchUsers from "../components/SearchUsers";

function EventDetails() {
  /* const session = JSON.parse(localStorage.getItem("sb-adznapocnpiuvpjbargm-auth-token"))

  const userId = session.user.id */
  const { userId } = useParams();
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState([]);
  const [description, setDescription] = useState("");
  const [displayForm, setDisplayForm] = useState(false);
  const [task, setTask] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [showTaskWarning, setShowTaskWarning] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  function getEvent() {
    supabase
      .from("events")
      .select()
      .eq("id", eventId)
      .then((response) => setEvent(response.data[0]))
      .catch((error) => console.error(error));
  }

  function getTask() {
    supabase
      .from("tasks")
      .select()
      .eq("event", eventId)
      .order("completed", { ascending: true })
      .then((response) => setTask(response.data))
      .catch((error) => console.error(error));
  }

  const handleCheckboxChange = (taskId, completed) => {
    supabase
      .from("tasks")
      .update({ completed })
      .eq("id", taskId)
      .then(() => {
        getTask();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getEvent();
    getTask();
  }, []);

  useEffect(() => {
    setTitle(event.title);
    setDate(event.date);
    getParticipants()
    intializeGuests(event.participants)
    setDescription(event.description);
  }, [event]);

  function intializeGuests(participants) {
    console.log("PARTICIPANTS ");
    
    if(participants){
      const newGuests = participants.map((participant) => {
        return participant;
      });
      setGuests(newGuests);
      console.log(newGuests);
      
    }
  }

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
      .update({ title, description, date, participants: guests })
      .eq("id", eventId)
      .then((response) => {
        setIsEditing(false);
      })
      .then(() => getEvent())
      .catch((error) => console.error(error));
  };

  const handleAddTaskClick = () => {
    setDisplayForm(!displayForm);
  };

  function deleteTask(id) {
    supabase
      .from("tasks")
      .delete()
      .eq("id", id)
      .then(
        () => {
          setShowTaskWarning(false);
          getTask();
        } // need to review this line of code:
      )
      .catch((error) => console.error(error));
  }

  const displayTaskWarning = (id) => {
    console.log("Display Task warning");
    setShowTaskWarning(true);
    setTaskIdToDelete(id);
  };

  function handleGuests(event, participant) {
    const newGuests = structuredClone(guests);
    if (event.target.checked) {
      newGuests.push(participant.username);
      setGuests(newGuests);
    } else {
      const index = newGuests.indexOf(participant.username);
      newGuests.splice(index, 1);
      setGuests(newGuests);
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
              <label> When is your event?</label>
              <input
                className="form-short-input"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                type="date"
              />
              <label htmlFor="participantSearch"> Who is coming?</label>
              <SearchUsers
                getParticipants={getParticipants}
                setParticipants={setParticipants}
              />
              <div className="participants-search">
                {participants?.map((participant) => (
                  <div key={participant.id}>
                    <input
                      type="checkbox"
                      id={guests.username}
                      name="user_name"
                      value={guests.username}
                      checked={guests.includes(participant.username)}
                      onChange={(event) => handleGuests(event, participant)}
                    />
                    <label htmlFor={participant.username}>
                      {participant.username}
                    </label>
                  </div>
                ))}
              </div>
              {/* <label>
                You can also share the event with friends via Whatsapp
              </label> */}
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
          <h2>{event.title} </h2>
          <span className="event-date">{event.date}</span>
          <div className="participants-container">
            {event.participants?.map((eachparticipant) => {
              return (
                <span key={eachparticipant} className="event-participants">
                  {eachparticipant}
                </span>
              );
            })}
          </div>
          <p>{event.description}</p>
          <div className="edit-button-container">
            <button onClick={handleEditClick}>Edit</button>
          </div>
          <div className="task-container">
            {task.map((eachTask) => {
              return (
                <div className="task" key={eachTask.id}>
                  <img src="" alt="" />
                  <p>{eachTask.text}</p>
                  <button onClick={() => displayTaskWarning(eachTask.id)}>
                    ❌
                  </button>
                  <div className="check-box-container">
                    <input
                      type="checkbox"
                      checked={eachTask.completed}
                      onChange={(event) =>
                        handleCheckboxChange(eachTask.id, event.target.checked)
                      }
                    />
                  </div>
                  <div className="">
                    <button
                      onClick={() => {
                        setIsTaskEditing(true);
                        setDisplayForm(true);
                        setTaskToEdit(eachTask);
                      }}
                      className="edit-task-button-container"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}

            <button
              className="add-task-button"
              onClick={() => {
                handleAddTaskClick();
                setIsTaskEditing(false);
                setTaskToEdit({});
              }}
            >
              +
            </button>
          </div>
        </li>
        {showTaskWarning && (
          <WarningTask
            deleteTask={deleteTask}
            taskIdToDelete={taskIdToDelete}
            setShowTaskWarning={setShowTaskWarning}
          />
        )}
        <Link to={`/users/${userId}`}>
          <div className="back-button-container">
            <button>Back</button>
          </div>
        </Link>
        {displayForm && (
          <TaskForm
            taskToEdit={taskToEdit}
            setTaskToEdit={setTaskToEdit}
            isTaskEditing={isTaskEditing}
            getTask={getTask}
            handleAddTaskClick={handleAddTaskClick}
          />
        )}
      </ul>
    );
  }
}

export default EventDetails;
