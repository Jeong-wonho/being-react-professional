import "./App.css";
import MomentExample from "./components/moment/MomentExample";
import DayjsExample from "./components/Dayjs/DayjsExample";
import DateFnsExample from "./components/DateFns/DateFnsExample";

function App() {
  return (
    <div className="App">
      <DateFnsExample />
      <DayjsExample />
      <MomentExample />
    </div>
  );
}

export default App;
