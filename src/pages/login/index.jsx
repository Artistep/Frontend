import React from "react";
import { LoginInput } from "../../components/Inputbar/styled";
import { LoginButton } from "../../components/button/styled";
import { SmallLabel, BigLabel } from "../../components/Label/styled";

const Login = () => {
  return (
    <div style={{ width: "100%", display: "block"}}>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <LoginInput placeholder="활동 아이디 또는 이메일" />
        <LoginInput placeholder="비밀번호" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <div>
            <input type="checkbox" />
            <label>자동로그인</label>
          </div>
          <div>
            <label>ID/비밀번호 찾기</label>
          </div>
        </div>

        <LoginButton>로그인</LoginButton>

        <div style={{marginTop:"150px", display:"grid"}}>
            <SmallLabel style={{textAlign:"center"}}>
                아직도 회원이 아닌가요?
            </SmallLabel>
            <BigLabel>
                회원가입 하러가기
            </BigLabel>
        </div>
      </div>
    </div>
  );
};

export default Login;
