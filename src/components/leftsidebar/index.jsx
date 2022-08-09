import { SideBox, SideContainer } from "../Box/styled";

const LeftSideBar = () => {
  const tabmenu = [
    {
      id: "홈",
      icon: "../../assets/icon/home.svg",
      link: "/",
    },
    {
      id: "탐색하기",
      icon: "../../assets/icon/search.svg",
      link: "/search",
    },
    {
      id: "커뮤니티",
      icon: "../../assets/icon/community.svg",
      link: "/community",
    },
    {
      id: "컨택하기",
      icon: "../../assets/icon/contact.svg",
      link: "/contact",
    },
    {
      id: "마이페이지",
      icon: "../../assets/icon/mypage.svg",
      link: "/mypage",
    },
  ];

  return (
    <SideContainer id="left">
      <SideBox id="left">
        {tabmenu.map((v) => {
          return <div>{v.id}</div>;
        })}
      </SideBox>
    </SideContainer>
  );
};

export default LeftSideBar;
