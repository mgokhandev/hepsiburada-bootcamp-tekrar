import "./App.css";
// import Users from "./components/Users.js";
// import Paragraph from "./components/Paragraph.js";
import Counter from "./components/Counter";
// import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      {/* <Paragraph
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident enim, accusantium distinctio amet quae et illo, blanditiis minima earum aut, officiis quidem? Inventore facilis tempora doloribus nostrum nemo repellat?"
        }
        numberOfLines={4}
      /> */}
      {/* <Users title="Users" /> */}

      {toggle ? <Counter /> : null}
      <button onClick={() => setToggle(!toggle)}>
        Toggle {toggle ? "Hide" : "Show"}
      </button>
      {/* <Form /> */}
    </div>
  );
}

export default App;
