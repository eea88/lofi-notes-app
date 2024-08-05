import './WarningEvent.css'

function WarningEvent({ setShowWarning, idToDelete, deleteEvent }) {
    return (
      <div className="warning-layout">
        <div className="warning-card">
            <h2> Warning!</h2>
          <p>Are you sure you want to delete this event?</p>
          <p> If you proceed the project will be deleted for all participants</p>
          <p> This action cannot be undone</p>
          {<button onClick={() =>deleteEvent(idToDelete)}>Yes</button> }
          <button onClick={() => setShowWarning(false)}>No</button>
        </div>
      </div>
    );
  }
  
  export default WarningEvent;