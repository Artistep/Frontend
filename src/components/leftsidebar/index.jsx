import { SideBox, SideContainer } from "../Box/styled";
const LeftSideBar = () => {
  const tabmenu = [
    {
      id: "홈",
      icon: `icon/film.svg`,
      link: "/",
    },
    {
      id: "탐색하기",
      icon: "icon/zoom-in.svg",
      link: "/search",
    },
    {
      id: "커뮤니티",
      icon: "icon/globe.svg",
      link: "/community",
    },
    {
      id: "컨택하기",
      icon: "icon/crosshair.svg",
      link: "/contact",
    },
    {
      id: "마이페이지",
      icon: "icon/home.svg",
      link: "/mypage",
    },
  ];

  return (
    <SideContainer id="left">
      <SideBox id="left">
        {tabmenu.map((v) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 0px",
              }}
            >
              <img src={v.icon} style={{ paddingRight: "18px" }} />
              {v.id}
            </div>
          );
        })}
      </SideBox>
    </SideContainer>
  );
};

export default LeftSideBar;
