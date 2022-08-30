import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar";
import Main from "./pages/main";
import LeftSideBar from "./components/leftsidebar";
import RightSideBar from "./components/rightsidebar";
import GlobalStyle from "./GlobalStyle";

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
