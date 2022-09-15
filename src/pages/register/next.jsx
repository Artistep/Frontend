import React from "react";
import { SmallLabel } from "../../components/Label/styled";
import { LoginInput } from "../../components/Inputbar/styled";
import { LoginButton } from "../../components/button/styled";

const Next = () => {
  return (
    <div style={{ width: "100%", display: "block" }}>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <LoginInput placeholder="아이디" />
        <LoginInput placeholder="비밀번호" />
        <LoginInput placeholder="비밀번호 확인" />

        <LoginButton>회원가입</LoginButton>
        <div style={{marginTop:"50px", display:"grid"}}>
          <SmallLabel>한글과 공백은 사용할 수 없어요.</SmallLabel>
          <SmallLabel>
            8~12자 영문, 숫자, 특수문자를 2가지 이상 사용해야 합니다.
          </SmallLabel>
          <SmallLabel>
            아이디와 비밀번호는 동일하게 사용할 수 없어요.
          </SmallLabel>
          <SmallLabel>
            연속 문자열과 같은 쉬운 비밀번호는 사용하지 않기를 권고합니다.
          </SmallLabel>
        </div>
      </div>
    </div>
  );
};

export default Next;
