import "./App.css";
import ClassComponents from "./components/2-5.State/ClassComponents";
import Composition from "./components/2-4.Props/Composition";
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import FunctionalComponents from "./components/2-5.State/FunctionalComponents";

function App() {
  return (
    <div className="App">
      <FunctionalComponents />
      <ClassComponents />
      <Extraction />
      <Composition />
    </div>
  );
}

export default App;
