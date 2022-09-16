import React from "react";
import Box from "../../components/Box";
import {
  HeaderBox,
  Circle,
  HeaderBtext,
  HeaderStext,
  FooterItem,
  Footer,
} from "../../components/Box/styled";

const Detail = () => {
  const wow = [1, 2, 3, 4, 5];
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "49%", float: "left" }}>
        <Box props={'main'}/>
      </div>
      <div style={{ width: "50%", float: "right" }}>
        {wow.map((i) => (
          <>
            <Box key={i} props={'detail'}/>
          </>
        ))}
      </div>
    </div>
  );
};

export default Detail;
