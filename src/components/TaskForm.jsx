import "./TaskForm.css";
import supabase from "../supabase/config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function TaskForm({handleAddTaskClick , getTask}) {
  const { eventId } = useParams();
  const [task, setTask] = useState("");
  const [text, setText] = useState("");

  const handleSubmission = (event) => {
    const newTask = { text, completed: false, event: eventId };

    event.preventDefault();
    supabase
      .from("tasks")
      .insert(newTask)
      .select()
      .then((response) => {
        console.log(response.data[0].id);
        handleAddTaskClick()
        getTask()
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmission} action="">
        <label>Task</label>
        <input type="text" onChange={(event) => setText(event.target.value)} />
        <div className="edit-button-container">
          <button type="submit">Save</button>

          <button onClick={handleAddTaskClick} type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
