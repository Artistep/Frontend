import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar";
import Main from "./pages/main";
import LeftSideBar from "./components/leftsidebar";
import RightSideBar from "./components/rightsidebar";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#C8C8C8",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            width: "1200px",
          }}
        >
          <LeftSideBar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <RightSideBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
