import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UserForm from "./pages/UserForm/UserForm";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user-form" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
