import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateEvent from "./pages/CreateEvent";
import EventDetails from "./pages/EventDetails";
import About from "./pages/About";
import CreateUser from "./pages/CreateUser";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/users/:userId/events/create" element={<CreateEvent />} />
        <Route path="/users/:userId/events/:eventId" element={<EventDetails />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
