import React from "react";
import {
  Mycon,
  MyBtext,
  Ftext,
  HeaderBox,
  Circle,
  HeaderBtext,
  HeaderStext,
} from "../../components/Box/styled";

const Follower = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <Mycon>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              color: "#FFFFFF",
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
          <div style={{ width: "50%" }}>
            {arr.map((i) => (
              <HeaderBox key={i} style={{marginBottom: "10px"}}>
                <Circle></Circle>
                <div>
                  <HeaderBtext>활동명</HeaderBtext>
                  <HeaderStext>@WORKING_NAME</HeaderStext>
                </div>
              </HeaderBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follower;
