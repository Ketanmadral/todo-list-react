import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <TaskList />
        <AddTask />
      </div>
    </GlobalProvider>
  );
}

export default App;
