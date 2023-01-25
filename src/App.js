import "./App.css";
import Header from "./componenets/Header";
import Form from "./componenets/Form";
import { useState } from "react";
import TodosList from "./componenets/TodosList";

function App() {
  const [input, setinput] = useState("");
  const [todo, settodo] = useState([]);
  const [edittodo, setedittodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrappper">
        <div>
          <Header />
        </div>
        <Form
          input={input}
          setinput={setinput}
          todo={todo}
          settodo={settodo}
          edittodo={edittodo}
          setedittodo={setedittodo}
        ></Form>
        <TodosList
          todo={todo}
          settodo={settodo}
          edittodo={edittodo}
          setedittodo={setedittodo}
        />
      </div>
    </div>
  );
}

export default App;
