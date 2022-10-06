import React from "react";
import { SearchHtext, SearchStext } from "../../components/Label/styled";
import { SearchInput } from "../../components/Inputbar/styled";
import { SearchBox } from "../../components/Box/styled";
import Arrow from "../../assets/img/Vector.png";
const Search = () => {
  return (
    <div style={{ display: "flex", width: "80%" }}>
      <div style={{ width: "80%", margin: " 0 auto" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#000",
            height: "338px",
          }}
        ></div>
        <div>
          <div style={{ display: "block", marginTop: "20px" }}>
            <SearchHtext>관심 분야를 검색해보세요</SearchHtext>
            <SearchStext>
              홍길동님이 검색한 키워드와 관련된 영상을 모두 찾아볼 수 있어요
            </SearchStext>
          </div>
          <SearchInput
            style={{ width: " 100%" }}
            placeholder="검색할 내용을 입력하세요"
          />
        </div>
        <div style={{ display: "block", marginTop: "50px" }}>
          <SearchHtext>카테고리별 검색</SearchHtext>
          <SearchStext>
            선택한 카테고리에 따라 알맞은 영상을 찾아볼 수 있어요
          </SearchStext>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <SearchBox
            style={{ justifyContent: "space-between", padding: "50px" }}
          >
            <div style={{ textAlign: "left" }}>
              <SearchHtext>힙합</SearchHtext>
              <SearchStext>Hip hop</SearchStext>
            </div>
            <div>
              <img src={Arrow} alt="arrow"/>
            </div>
          </SearchBox>
          <SearchBox
            style={{ justifyContent: "space-between", padding: "50px" }}
          >
            <div style={{ textAlign: "left" }}>
              <SearchHtext>R&B</SearchHtext>
              <SearchStext>RHYTHM AND BLUES</SearchStext>
            </div>
            <div>
              <img src={Arrow} alt="arrow"/>
            </div>
          </SearchBox>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <SearchBox
            style={{ justifyContent: "space-between", padding: "50px" }}
          >
            <div style={{ textAlign: "left" }}>
              <SearchHtext>프로듀싱</SearchHtext>
              <SearchStext>PRODUCER</SearchStext>
            </div>
            <div>
              <img src={Arrow} alt="arrow"/>
            </div>
          </SearchBox>
          <SearchBox
            style={{ justifyContent: "space-between", padding: "50px" }}
          >
            <div style={{ textAlign: "left" }}>
              <SearchHtext>작곡</SearchHtext>
              <SearchStext>COMPOSE</SearchStext>
            </div>
            <div>
              <img src={Arrow} alt="arrow"/>
            </div>
          </SearchBox>
        </div>
      </div>
    </div>
  );
};

export default Search;
