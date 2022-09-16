import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar";
import Main from "./pages/main";
import Login from "./pages/login";
import LeftSideBar from "./components/leftsidebar";
import RightSideBar from "./components/rightsidebar";
import GlobalStyle from "./GlobalStyle";
import Register from "./pages/register";
import Next from "./pages/register/next";
import Idfind from "./pages/find/idfind";
import Pwfind from "./pages/find/pwfind";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <div
        style={{
          display: "flex",
          paddingTop: "70px",
          justifyContent: "center",
          backgroundColor: "#F6F6F6",
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
          <Routes>
            <Route element={<LeftSideBar />}>
              <Route path="/" element={<Main />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/next" element={<Next />} />
            <Route path="/idfind" element={<Idfind />} />
            <Route path="/pwfind" element={<Pwfind />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
