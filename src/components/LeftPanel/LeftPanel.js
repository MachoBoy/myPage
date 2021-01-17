import React from "react";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const LeftPanel = () => {
  return (
    <LeftContainer>
      <LeftWrapper>
        <TopIntroWrapper>
          Hello, I’m
          <br /> Jiwon Park
        </TopIntroWrapper>
        <MiddleIntroWrapper>
          I’m a Front-End Enginner, who is working for the Vertigo Games
          America. I mostly build projects Front-End with React and Vue. I love
          to learn new things such as, new
        </MiddleIntroWrapper>
        <Navigation></Navigation>
      </LeftWrapper>
    </LeftContainer>
  );
};

const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  overflow: hidden;
`;

const LeftWrapper = styled.div`
  padding-top: 70px;
  padding-left: 70px;
  position: absolute;
  width: 100%;
  left: 0%;
  top: 0;
  background-color: #1c2422;
`;

const TopIntroWrapper = styled.h1`
  width: 100%;
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  font-style: normal;
  color: #fff;
`;

const MiddleIntroWrapper = styled.h4`
  margin-top: 35px;
  width: 88%;
  font-size: 25px;
  font-weight: normal;
  line-height: 37px;
  color: #a39595;
`;

export default LeftPanel;
