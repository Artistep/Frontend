import styled from "styled-components";

export const SideContainer = styled.div`
  width: 20%;
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
  width: 100%;
  height: 132px;
  background: #ffffff;
  border: 2px solid #f6f6f6;
  border-radius: 20px;
  margin-bottom: 50px;
`;

export const FeedBox = styled.div`
  width: 100%;
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
  width: 100%;
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

export const SmallCon = styled.div`
  width: 100%;
  height: 100px;

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

export const Mycon = styled.div`
  width: 100%;
  padding: 100px 0px 50px 0px;
  justify-content: center;
  display: flex;
  background: #000000;
  border-radius: 0px 0px 0px 30px;
`;

export const BigCir = styled.div`
  width: 210px;
  height: 210px;
  background: #b6b6b6;
  border-radius: 100px;
  margin-right: 10px;
  align-self: center;
`;

export const MyBtext = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  color: #ffffff;
`;
export const MyStext = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #b6b6b6;
`;

export const MyBox = styled.div`
  justify-content: center;
  align-items: center;
  padding: 9px 24px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 5px;
  width: 87px;
  height: 24px;

  background: #3b3b3b;
  border-radius: 24px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  letter-spacing: -0.02em;
  font-feature-settings: "calt" off;
`;

export const Ftext = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
`;

export const MyRec = styled.div`
  width: 291px;
  height: 291px;
  background: #d9d9d9;
  border-radius: 10px;
`;
