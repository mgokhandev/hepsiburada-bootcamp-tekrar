import "./App.css";
// import Users from "./components/Users.js";
// import Paragraph from "./components/Paragraph.js";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Paragraph
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident enim, accusantium distinctio amet quae et illo, blanditiis minima earum aut, officiis quidem? Inventore facilis tempora doloribus nostrum nemo repellat?"
        }
        numberOfLines={4}
      />
      <Users title="Users" list={[{ name: "Mehmet" }, { name: "Elif" }]} />
      <Users title="İsimler" list={[{ name: "İsim1" }, { name: "İsim2" }]} /> */}

      <Counter />
    </div>
  );
}

export default App;
