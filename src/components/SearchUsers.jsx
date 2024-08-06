import { useState } from "react";
import supabase from "../supabase/config";

function SearchUsers(query) {
    const [searchParticpants, setSearchPartipants] = useState("");

function getSearchUsers(query){
    setSearchPartipants(query.target.value);
}

    return(
    supabase
      .from("users")
      .select()
      .or(`username.ilike.${query}%`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error))
      
    )
}
export default SearchUsers;

const searchForParticpants = (query) => {
    SearchUsers(query)
    .then((data) =>{
      setParticipants(data);
      console.log(query)
    })
    .catch((error) => console.error(error));
    /* return (
      <>
        <div className="participants-search">
          <input type="checkbox" id="Juan" name="user_name" value="Juan" />
          <label htmlFor="Juan">Juan</label>
        </div>
      </>
    ); */
  };