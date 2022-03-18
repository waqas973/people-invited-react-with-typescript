import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export type People = {
  name: string;
  age: number;
  url: string;
  note?: string | undefined;
};

const App = () => {
  const [people, setPeople] = useState<People[]>([]);
  return (
    <div className="App">
      <h1>People Invited to my Party </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
