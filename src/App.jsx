import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Budgets from "./pages/Budgets";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="budgets" element={<Budgets />}/>
        <Route path="logout" element={<Logout />}/>
        <Route path="settings" element={<Settings />}/>
        <Route path="reports" element={<Reports />}/>
      </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
