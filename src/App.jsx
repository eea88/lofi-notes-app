import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route
          path="/users/:userId/events/create"
          element={<h2>Create Event</h2>}
        ></Route>
        <Route
          path="/users/:userId/events/:eventId"
          element={<h2>Event Details</h2>}
        />
        <Route path="/users/:userId" element={<h2>User Page</h2>} />
        <Route path="/users/create" element={<h2>Create User</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="*" element={<h2>Not Found</h2>}></Route>
      </Routes>
    </>
  );
}

export default App;
