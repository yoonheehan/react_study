import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import { useState } from "react";

function App() {
  const [clickedButton, setClickedButton] = useState(0);

  function chageState(state) {
    setClickedButton(state);
  }

  return (
    <div className="App">
      <div className="flex ">
        <button
          onClick={() => chageState(0)}
          className="text-3xl bg-blue-500 flex-1"
        >
          User
        </button>
        <button
          onClick={() => chageState(1)}
          className="text-3xl bg-green-500 flex-1"
        >
          Posts
        </button>
        <button
          onClick={() => chageState(2)}
          className="text-3xl bg-purple-500 flex-1"
        >
          Comments
        </button>
      </div>
      {clickedButton === 0 && <Users />}
      {clickedButton === 1 && <Posts />}
      {clickedButton === 2 && <Comments />}
    </div>
  );
}

export default App;
