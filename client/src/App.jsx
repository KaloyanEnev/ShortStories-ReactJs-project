import { useState } from "react";
import "../src/css/App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import StoryList from "./components/story-list/StoryList";
import Footer from "./components/footer/Footer";
import StoryDetails from "./components/story-details/StoryDetails";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { AuthContextProvider } from "./contexts/AuthContext";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <>
    <AuthContextProvider>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="/register" element={<Register />} />

            <Route path="/stories" element={<StoryList />} />
            <Route
              path="/stories/:storyId/details"
              element={<StoryDetails />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
