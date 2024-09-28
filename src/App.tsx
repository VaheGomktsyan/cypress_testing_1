import { BrowserRouter } from "react-router-dom";
import { Demo } from "./Demo";
import { MyRouter } from "./router/MyRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;

//https://foolishdeveloper.com/todo-list-javascript/
