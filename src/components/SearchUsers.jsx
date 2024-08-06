import { useState } from "react";
import supabase from "../supabase/config";

function SearchUsers({getParticipants, setParticipants}) {
    const [searchParticpants, setSearchParticipants] = useState("");

function getSearchUsers(query){
    setSearchParticipants(query.target.value);
    if (query.target.value === "") {
      setParticipants([]);
      return;
    }
    supabase
      .from("users")
      .select()
      .or(`username.ilike.%${query.target.value}%`)
      .then((response) => {setParticipants(response.data);console.log(response.data)})
      .catch((error) => console.error(error))
}
return (
  <>
    <input
      onChange={getSearchUsers}
      type="text"
      placeholder="search for your friends"
    />
    {/* <p>{searchParticpants}</p> */}
  </>
);
}
export default SearchUsers;


    /* return (
      <>
        <div className="participants-search">
          <input type="checkbox" id="Juan" name="user_name" value="Juan" />
          <label htmlFor="Juan">Juan</label>
        </div>
      </>
    ); */
