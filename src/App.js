import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Protected } from "./components/Protected";
import { AddUser } from "./pages/AddUser";
import { Edituser } from "./pages/EditUser";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Students } from "./pages/Students";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<Protected Component={Students} />} />
        <Route path="/addStudent" element={<AddUser/>}/>
        <Route path="/editStudent/:id" element={<Edituser/>}/>
      </Routes>
    </div>
  );
}

export default App;
