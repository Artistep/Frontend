import React, { useState } from "react";
import { BigLabel, SmallLabel, BigText } from "../../components/Label/styled";
import { LoginButton } from "../../components/button/styled";
import { LoginInput } from "../../components/Inputbar/styled";
import { FindBox } from "../../components/Box/styled";

const Idfind = () => {
  const [type, setType] = useState(false);
  const onClick = () => {
    setType(!type);
  };
  return (
    <div style={{ width: "100%", display: "block" }}>
      <div style={{ width: "50%", margin: "0 auto" }}>
        {type ? (
          <>
            <BigText>
              회원가입 시 등록한 정보로 인증을 통해 아이디를 확인할 수 있어요
            </BigText>
            <LoginInput placeholder="이름을 입력해주세요" />
            <LoginInput placeholder="휴대폰 번호를 입력해주세요 ('-'제외)" />

            <LoginButton onClick={onClick}>확인</LoginButton>
          </>
        ) : (
          <>
            <BigText>회원님의 정보와 일치하는 아이디입니다</BigText>
            <FindBox>
              <BigText>아이디정보</BigText>
            </FindBox>

            <LoginButton onClick={onClick}>확인</LoginButton>
          </>
        )}

        <div style={{ marginTop: "150px", display: "grid" }}>
          <SmallLabel style={{ textAlign: "center" }}>
            비밀번호가 기억나지 않으시나요?
          </SmallLabel>
          <BigLabel>비밀번호 찾기</BigLabel>
        </div>
      </div>
    </div>
  );
};

export default Idfind;
