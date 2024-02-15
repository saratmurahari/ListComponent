import "./styles.css";
import NestedList from "./NestedList";
import dataJson from "./data";
export default function App() {
  return (
    <div className="App">
      <h1>Create a list component</h1>
      <NestedList data={dataJson} />
    </div>
  );
}
