import React from "react";
import { LoginInput } from "../../components/Inputbar/styled";
import { LoginButton } from "../../components/button/styled";

const Register = () => {
  return (
    <div style={{ width: "100%", display: "block", marginTop: "200px"}}>
      <div style={{ width: "40%", margin: "0 auto" }}>
        <LoginInput placeholder="성명" />
        <LoginInput placeholder="전화번호" />
        <LoginInput placeholder="인증번호" />
        <LoginInput placeholder="이메일" />
        <div>
          <div style={{padding: "10px"}}>
            <input type="checkbox" />
            <label>전체 동의하기</label>
          </div>
          <div style={{padding: "10px"}}>
            <input type="checkbox" />
            <label>(필수) 개인정보 수집 및 이용 동의</label>
          </div>
          <div style={{padding: "10px"}}>
            <input type="checkbox" />
            <label>(필수) 제 3자 제공 동의</label>
          </div>
          <div style={{padding: "10px", marginBottom: "10px"}}>
            <input type="checkbox" />
            <label>(선택) 마케팅 정보 수신 동의</label>
          </div>
        </div>

        <LoginButton>
            다음
        </LoginButton>
      </div>
    </div>
  );
};

export default Register;
