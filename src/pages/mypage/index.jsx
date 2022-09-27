import React from "react";
import {
  Mycon,
  BigCir,
  MyBtext,
  MyStext,
  MyBox,
  Ftext,
  SideBox,
  SideContainer,
  SideElement,
  MyRec,
  HeaderBox,
  Circle,
  HeaderBtext,
  HeaderStext
} from "../../components/Box/styled";
import RightSideBar from "../../components/rightsidebar";

const Mypage = () => {
  return (
    <div>
      <Mycon>
        <div style={{ display: "flex" }}>
          <BigCir>동그라미</BigCir>
          <div style={{ color: "#FFFFFF", marginLeft: "50px" }}>
            <div>
              <MyBtext>안녕하세요 홍길동님</MyBtext>
              <MyStext>홍길동님의 레벨은 현재 1레벨입니다.</MyStext>
            </div>

            <div style={{ marginTop: "20px" }}>
              <MyBtext>활동명</MyBtext>
              <MyStext>@Working_name</MyStext>
            </div>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <MyBox>리스너</MyBox>
              <MyBox>뮤지션</MyBox>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "15px",
                justifyContent: "space-around",
              }}
            >
              <div style={{ textAlign: "center", margin: "5px" }}>
                <MyBtext>78</MyBtext>
                <Ftext>팔로워</Ftext>
              </div>
              <div style={{ textAlign: "center", margin: "5px" }}>
                <MyBtext>0</MyBtext>
                <Ftext>팔로잉</Ftext>
              </div>
              <div style={{ textAlign: "center", margin: "5px" }}>
                <MyBtext>1K</MyBtext>
                <Ftext>좋아요</Ftext>
              </div>
            </div>
          </div>
        </div>
      </Mycon>

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
          {Left()}
        </div>
      </div>
    </div>
  );
};

export default Mypage;

const Left = () => {
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

  const box = [1, 2];

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
      <div style={{ width: "100%", margin: "0 auto"}}>
        {box.map((i) => (
          <div
            style={{
              display: "flex",
              width: "100%",
              marginBottom: "50px",
              justifyContent: "space-evenly",
            }}
          >
            <MyRec></MyRec>
            <MyRec></MyRec>
          </div>
        ))}

        <div style={{ width: "100%", marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>회원님을 위한 컨택 추천</div>
          <div>
            <HeaderBox>
              <Circle></Circle>
              <div>
                <HeaderBtext>활동명</HeaderBtext>
                <HeaderStext>@WORKING_NAME</HeaderStext>
              </div>
            </HeaderBox>
          </div>
        </div>
      </div>

      <RightSideBar />
    </>
  );
};
