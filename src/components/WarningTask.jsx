import './WarningTask.css'

function WarningTask({ setShowTaskWarning, taskIdToDelete, deleteTask }) {
    return (
      <div className="warning-task-layout">
        <div className="warning-card">
            <h3> Warning!</h3>
          <p>Are you sure you want to delete this task?</p>
          {<button onClick={() =>deleteTask(taskIdToDelete)}>Yes</button> }
          <button onClick={() => setShowTaskWarning(false)}>No</button>
        </div>
      </div>
    );
  }
  
  export default WarningTask;

  // things to add to the Event Details Page:

  // const [showTaskWarning, setShowTaskWarning] = useState(false);
  //const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  function deleteTask (id) {
    //console.log("Attempting to delete event with ID:", id); // Debugging log
    supabase
      .from("tasks")
      .delete()
      .eq("id", id)
      .then(
        () => {setShowTaskWarning(false);
          getTasks() } // need to review this line of code:
      )
      .catch((error) => console.error(error));
  };
  
  const displayTaskWarning = (id) => {
    console.log("Display Task warning");
    setShowTaskWarning(true);
    setTaskIdToDelete(id);
  };

// things to add to the return html

/* Review that the eachTask.id works
<button onClick={() => displayTaskWarning(eachTask.id)}>❌</button> 

{showTaskWarning && (
    <WarningTask
      deleteTask={deleteTask}
      taskIdToDelete={taskIdToDelete}
      setShowTaskWarning={setShowTaskWarning}
    />
  )}
    */

