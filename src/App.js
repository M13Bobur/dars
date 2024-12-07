import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home"
import Table from "./pages/table"

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/table">Table</Link>
      </div>
      <br /><br />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<Table/>}/>
      </Routes>
    </div>
  );
}

export default App;

// npx json-server -p 8080 db.json