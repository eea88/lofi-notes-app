import "./EventDetails.css";
import supabase from "../supabase/config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "../components/TaskForm";
import WarningTask from "../components/WarningTask";



function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [displayForm, setDisplayForm] = useState(false);
  const [task, setTask] = useState([]);
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
      .then((response) => setTask(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getEvent();
    getTask();
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

  const handleAddTaskClick = () => {
    setDisplayForm(!displayForm);
  };

  function deleteTask (id) {
    
    supabase
      .from("tasks")
      .delete()
      .eq("id", id)
      .then(
        () => {setShowTaskWarning(false);
          getTask() } // need to review this line of code:
      )
      .catch((error) => console.error(error));
  };
  
  const displayTaskWarning = (id) => {
    console.log("Display Task warning");
    setShowTaskWarning(true);
    setTaskIdToDelete(id);
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
        <li className="event-card-container" >
          <h2>{event.title}</h2>
          <p>{event.description}</p>

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
                    <input type="checkbox" />
                  </div>
                  
                </div>
              );
            })}
            {showTaskWarning && (
              <WarningTask
                deleteTask={deleteTask}
                taskIdToDelete={taskIdToDelete}
                setShowTaskWarning={setShowTaskWarning}
              />
            )}

            <button className="add-task-button" onClick={handleAddTaskClick}>
              +
            </button>
          </div>

          <div className="edit-button-container">
            <button onClick={handleEditClick}>Edit</button>
          </div>
        </li>
        <Link to="/users/:userId">
          <div className="back-button-container">
            <button>Back</button>
          </div>
        </Link>
        {displayForm && (
          <TaskForm getTask={getTask} handleAddTaskClick={handleAddTaskClick} />
        )}
      </ul>
    );
  }
}

export default EventDetails;
