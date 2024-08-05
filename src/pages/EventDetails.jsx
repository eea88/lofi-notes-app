import './EventDetails.css'
import supabase from '../supabase/config';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function EventDetails (){
    const {eventId} = useParams()
    const [event, setEvent] = useState([]);

    

      
       function getEvent() {
        supabase
          .from("events")
          .select()
          .eq("id",eventId)
          .then((response) => setEvent(response.data[0]))
          .catch ((error) => console.error(error))
      } 
    
    
      useEffect (()=>{
      getEvent() 
    },[]); 
       

    

return (
    <ul className='event-detail-container'>
        <li className='event-card-container'>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className='edit-button-container'>
            <button>Edit</button>
            </div>
            
            
        </li>
    </ul>
)

}

export default EventDetails;