import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/sass/index.scss";
import { Landing } from "screens";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Landing />
    </DndProvider>
  );
}

export default App;
