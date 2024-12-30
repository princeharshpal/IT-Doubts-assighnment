import React from "react";
import Entries from "./components/Entries";
import CreateEntry from "./components/CreateEntry";
import Edit from "./components/Edit";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Router> */}
        {/* <Routes> */}
          {/* <Route path="/contacts" element={<Entries />} /> */}
          {/* <Route path="/contacts:id" element={<Edit />} /> */}
          {/* <Route path="/contacts" element={<CreateEntry />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
      <CreateEntry />
    </>
  );
};

export default App;
