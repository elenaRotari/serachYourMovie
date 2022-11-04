import { useState } from "react";
import "./App.scss";
import Search from "./components/Search";

import Movie from "./components/Movie";

function App() {
  const [param, setParam] = useState("");

  return (
    <div className="App">
      <Search setParam={setParam} />
      {param && <Movie param={param} />}
    </div>
  );
}

export default App;
