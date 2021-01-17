import React from "react";
import styled from "styled-components";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

const Main = () => (
  <MainContainer>
    <LeftPanel />
    <RightPanel />
  </MainContainer>
);

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #1c2422;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export default Main;
