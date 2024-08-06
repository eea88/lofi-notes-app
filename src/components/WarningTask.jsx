import './WarningTask.css'

function WarningTask({ setShowTaskWarning, taskIdToDelete, deleteTask }) {
    return (
      <div className="warning-task-layout">
        <div className="warning-card">
            <h2> Warning!</h2>
          <p>Are you sure you want to delete this task?</p>
          {<button onClick={() =>deleteTask(taskIdToDelete)}>Yes</button> }
          <button onClick={() => setShowTaskWarning(false)}>No</button>
        </div>
      </div>
    );
  }
  
  export default WarningTask;

  




    

