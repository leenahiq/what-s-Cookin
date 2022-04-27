import "./App.css";
import Getapi from "./pages/api/Final";
import Ingredient from "./pages/ingredient";
import Recipe from "./pages/recipe";

function App() {
  return (
    <div className="App">
      <h1>main project</h1>
      <Getapi />
      <Recipe />
      <Ingredient />
    </div>
  );
}

export default App;
