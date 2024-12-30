import React from "react";
import Entries from "./components/Entries";
import CreateEntry from "./components/CreateEntry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contacts" element={<Entries />} />
        <Route path="/contacts/new" element={<CreateEntry />} />
      </Routes>
    </Router>
  );
};

export default App;
