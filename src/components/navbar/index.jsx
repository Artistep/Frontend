import React, { useState } from "react";
import Logo from "../../assets/img/ArtistepLogo.png";

const Nav = () => {
  const [state, setState] = useState(true);
  const onClick = () => {
    setState(!state);
  };
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px",
      }}
    >
      {state ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", width: "60%" ,  margin: "0 auto"}}>
            <button>+</button>
            <img src={Logo} alt="Logo" onClick={onClick} />
            <button>+</button>
          </div>
        </>
      ) : (
        <>
        <div style={{height: "60px", display: "flex", justifyContent: "center"}}>
        <h1 style={{alignSelf: "center"}}>  로그인</h1>

        </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            
            <img src={Logo} alt="Logo" onClick={onClick} />
          </div>
        </>
      )}
    </div>
  );
};
export default Nav;
