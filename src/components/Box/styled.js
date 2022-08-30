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
