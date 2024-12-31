import React from "react";
import Entries from "./components/Entries";
import CreateEntry from "./components/CreateEntry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contacts/new" element={<CreateEntry />} />
        <Route path="/contacts/:id" element={<Edit />} />
        <Route path="/contacts" element={<Entries />} />
      </Routes>
    </Router>
  );
};

export default App;
