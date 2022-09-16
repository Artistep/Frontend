import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderBox,
  Circle,
  HeaderBtext,
  HeaderStext,
  Container,
  Footer,
  FooterItem,
  SmallCon
} from "./styled";

const Box = (props) => {
  const navigate = useNavigate();
  return props.props == "main" ? (
    <div style={{ marginTop: "20px" }}>
      <HeaderBox>
        <Circle></Circle>
        <div>
          <HeaderBtext>활동명</HeaderBtext>
          <HeaderStext>@WORKING_NAME</HeaderStext>
        </div>
      </HeaderBox>
      <Container onClick={() => navigate("/detail")}>게시글</Container>
      <Footer>
        <div>
          <FooterItem></FooterItem>
          <FooterItem></FooterItem>
          <FooterItem></FooterItem>
        </div>
        <div>
          <FooterItem></FooterItem>
        </div>
      </Footer>
    </div>
  ) : (
    <div style={{ marginTop: "20px" }}>
      <HeaderBox>
        <Circle></Circle>
        <div>
          <HeaderBtext>활동명</HeaderBtext>
          <HeaderStext>@WORKING_NAME</HeaderStext>
        </div>
      </HeaderBox>
      <SmallCon onClick={() => navigate('/detail')}>댓글</SmallCon>
      <Footer>
        <div>
          <FooterItem></FooterItem>
          <FooterItem></FooterItem>
          <FooterItem></FooterItem>
        </div>
        <div>
          <FooterItem></FooterItem>
        </div>
      </Footer>
    </div>
  );
};

export default Box;
