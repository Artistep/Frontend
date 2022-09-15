import React from "react";
import { HeaderBox, Circle, HeaderBtext, HeaderStext, Container, Footer,FooterItem } from "./styled";

const Box = () => {
  return (
    <div style={{marginTop: '20px'}}>
      <HeaderBox>
        <Circle></Circle>
        <div>
          <HeaderBtext>활동명</HeaderBtext>
          <HeaderStext>@WORKING_NAME</HeaderStext>
        </div>
      </HeaderBox>
      <Container>게시글</Container>
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
