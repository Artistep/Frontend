import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar";
import Main from "./pages/main";
import Login from "./pages/login";
import LeftSideBar from "./components/leftsidebar";
import GlobalStyle from "./GlobalStyle";
import Register from "./pages/register";
import Next from "./pages/register/next";
import Idfind from "./pages/find/idfind";
import Pwfind from "./pages/find/pwfind";
import Detail from "./pages/detail";
import Mypage from "./pages/mypage";
import Follower from "./pages/mypage/Follower";
import Search from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/follower" element={<Follower />} />
      </Routes>
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
            margin: "10px 200px 0px 200px",
            width: "100%",
          }}
        >
          <Routes>
            <Route element={<LeftSideBar />}>
              <Route path="/" element={<Main />} />
              <Route path="/search" element={<Search />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/next" element={<Next />} />
            <Route path="/idfind" element={<Idfind />} />
            <Route path="/pwfind" element={<Pwfind />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
