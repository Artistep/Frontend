import styled from "styled-components";

export const SideContainer = styled.div`
  width: 290px;
  font-family: "NotoSansKR-Regular";
  &#left {
    margin-right: auto;
  }
  &#right {
    margin-left: auto;
  }
`;

export const SideBox = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 16px 36px;
  &#title {
    font-family: "NotoSansKR-Bold";
  }
`;

export const SideElement = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px 0px;
  &:hover {
    font-family: "NotoSansKR-Bold";
  }
`;

export const FindBox = styled.div`
  width: 392px;
  height: 132px;
  background: #ffffff;
  border: 2px solid #f6f6f6;
  border-radius: 20px;
  margin-bottom: 50px;
`;

export const FeedBox = styled.div`
width: 594px;
height: 100px;
text-align: center;
background: #000000;
border-radius: 20px;
`