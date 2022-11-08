import "./App.css";
// import Condition from "./components/2-8.ConditionalRendering/Condition";
// import List from "./components/2-9.List/List";
// import ClassComponents from "./components/2-5.State/ClassComponents";
// import Composition from "./components/2-4.Props/Composition";
// import Extraction from "./components/2-4.Props/Extraction/Extraction";
// import FunctionalComponents from "./components/2-5.State/FunctionalComponents";
// import ClassComponents2 from "./components/2-6.LifeCycle/ClassComponents";
// import Event from "./components/2-7.Event/Event";
// import ControlledComponent from "./components/2-10.Form/ControlledComponent";
// import UnControlledComponent from "./components/2-10.Form/UnControlledComponent";
import State from "./components/3-3. Hooks/State";
import Reducer from "./components/3-3. Hooks/Reducer";

function App() {
  return (
    <div className="App">
      <Reducer />
      <State />
      {/* <UnControlledComponent />
      <ControlledComponent /> */}
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponents2 /> */}
      {/* <FunctionalComponents /> */}
      {/* <ClassComponents /> */}
      {/* <Extraction /> */}
      {/* <Composition /> */}
    </div>
  );
}

export default App;
