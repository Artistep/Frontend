import { SideBox, SideContainer, SideElement } from "../Box/styled";
import { Outlet } from "react-router";
import RightSideBar from "../rightsidebar";

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
    <>
      <SideContainer id="left">
        <SideBox id="left">
          {tabmenu.map((v) => {
            return (
              <SideElement key={v.id}>
                <img src={v.icon} alt={v.id} style={{ paddingRight: "18px" }} />
                {v.id}
              </SideElement>
            );
          })}
        </SideBox>
      </SideContainer>
      <Outlet />
      <RightSideBar />
    </>
  );
};

export default LeftSideBar;
