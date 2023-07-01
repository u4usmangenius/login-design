import { Routes, Route, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import "./App.css";
import Dashboard from "./pages/Dashboard";
function App() {
  let aryobj = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "signup",
          element: <signup />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
      ],
    },
  ]);

  return (
    // Usman Cureently i've not used subroutes
    <Routes>
      <Route path="signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Dashboard />} />
      <Route path="chat" element={<Chat />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
