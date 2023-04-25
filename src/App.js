import React from "react";
import Home from "./features/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Songs from "./features/songs/songs";
import ManageSongs from "./features/songs/manage-songs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route exact path="/home" element={<Home />}>
            <Route index element={<Navigate to="songs" />} />
            <Route exact path="songs" element={<Songs />} />
            <Route exact path="manageSongs" element={<ManageSongs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
