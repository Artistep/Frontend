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
`;

export const HeaderBox = styled.div`
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  padding: 20px;
  display: flex;
`;

export const Circle = styled.div`
  width: 37px;
  height: 37px;
  background: #b6b6b6;
  border-radius: 40px;
  margin-right: 10px;
`;

export const HeaderBtext = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;
export const HeaderStext = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  color: #494949;
`;

export const Container = styled.div`
  width: 100%;
  height: 500px;

  background: #b6b6b6;
  border-radius: 0px;
`;

export const Footer = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: space-between;
`;

export const FooterItem = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: #3b3b3b;
  border-radius: 40px;
  margin-right: 10px;
`;
