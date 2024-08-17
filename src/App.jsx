import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Budgets from "./pages/Budgets";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="budgets" element={<Budgets />}/>
      </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
