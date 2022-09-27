import React from "react";
import {
  Mycon,
  BigCir,
  MyBtext,
  MyStext,
  MyBox,
  Ftext,
} from "../../components/Box/styled";

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

            <div style={{marginTop: "20px"}}>
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
    </div>
  );
};

export default Mypage;
