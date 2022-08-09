import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
