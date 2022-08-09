import Logo from "../../assets/img/ArtistepLogo.png";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#000",
        justifyContent: "center",
        color: "#fff",
        padding: "10px",
      }}
    >
      <img src={Logo} alt="Logo" />
    </div>
  );
};
export default Nav;
