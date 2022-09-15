import React from "react";
import { FeedBox } from "../../components/Box/styled";
import { FeedText, SmallLabel } from "../../components/Label/styled";
import Box from "../../components/Box";

const Main = () => {
  return (
    <div>
      <FeedBox>
        <img />
        <FeedText>반가워요 홍길동님 오늘의 피드를 확인해보세요</FeedText>
        <SmallLabel>다양한 아티스트와 함께 스텝을 맞춰 걸어요 </SmallLabel>
      </FeedBox>

      <Box />
    </div>
  );
};

export default Main;
