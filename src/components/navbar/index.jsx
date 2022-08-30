import Logo from "../../assets/img/ArtistepLogo.png";

const Nav = () => {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};
export default Nav;
