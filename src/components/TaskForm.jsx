import "./TaskForm.css";
import supabase from "../supabase/config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function TaskForm({
  handleAddTaskClick,
  getTask,
  isTaskEditing,
  taskToEdit,
  setTaskToEdit,
}) {
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
        handleAddTaskClick();
        getTask();
      })
      .catch((error) => console.error(error));
  };

  const updateTask = () => {
    supabase
      .from("tasks")
      .update({ text })
      .eq("id", taskToEdit.id)
      .then(() => {
        getTask();
        setTaskToEdit(null);
        handleAddTaskClick();
      })
      .catch((error) => console.error(error));
  };

  if (isTaskEditing) {
    return (
      <form onSubmit={updateTask}>
        <label> Task</label>
        <input
          required
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
        />
        <button type="submit">Save</button>
        <button onClick={handleAddTaskClick} type="button">
          Cancel
        </button>
      </form>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmission} action="">
          <label>Task</label>
          <input
            type="text"
            onChange={(event) => setText(event.target.value)}
          />
          <div className="edit-button-container">
            <button type="submit">Save</button>

            <button onClick={handleAddTaskClick} type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
