/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Title from "./app-components/title";
import Body from "./app-components/body";
import EditModal from "./app-components/edit-modal";

function App() {
  return (
    <div className="page">
      <EditModal />
      <Title />
      <Body />
    </div>
  );
}

export default App;
