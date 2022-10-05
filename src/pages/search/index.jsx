import React from "react";
import { HeaderBtext, HeaderStext } from "../../components/Box/styled";

const Search = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{width: "80%", margin: " 0 auto"}}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#000",
            height: "338px",
          }}
        ></div>
        <div>
          <div style={{ display: "block", marginTop: "20px" }}>
            <HeaderBtext>관심 분야를 검색해보세요</HeaderBtext>
            <HeaderStext>
              홍길동님이 검색한 키워드와 관련된 영상을 모두 찾아볼 수 있어요
            </HeaderStext>
          </div>
          <input placeholder="검색할 내용을 입력하세요"/>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
