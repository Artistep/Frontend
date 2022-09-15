import {
  SideBox,
  SideContainer,
  HeaderBox,
  Circle,
  HeaderBtext,
  HeaderStext,
} from "../Box/styled";
import { BigText } from "../Label/styled";

const RightSideBar = () => {
  return (
    <SideContainer id="right">
      <SideBox id="title">내 계정</SideBox>
      <HeaderBox>
        <Circle></Circle>
        <div>
          <HeaderBtext>활동명</HeaderBtext>
          <HeaderStext>@WORKING_NAME</HeaderStext>
        </div>
      </HeaderBox>
      <div style={{marginTop: "20px"}}>
        <div style={{marginBottom: "10px"}}>회원님을 위한 컨택 추천</div>
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
    </SideContainer>
  );
};

export default RightSideBar;
