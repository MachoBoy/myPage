import React from "react";
import styled from "styled-components";
const ExpBox = (props) => {
  const { icon, name, desc, duration } = props;
  return (
    <ExpContainer>
      <HeaderWrapper>
        <Icon src={icon}></Icon>
        <RightWrapper>
          <Title>{name}</Title>
          <Duration>{duration}</Duration>
        </RightWrapper>
      </HeaderWrapper>
      <BodyWrapper>{desc}</BodyWrapper>
    </ExpContainer>
  );
};

const ExpContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0.3rem;
  padding: 2.2rem 1.6rem;
  background: #36363a;
  border-radius: 15px;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const RightWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
const Icon = styled.img`
  padding: 15px 15px 15px 0;
  height: 60px;
`;
const Title = styled.span`
  font-size: 1.9rem;
  line-height: 43px;
  font-weight: normal;
  color: #f5eded;
  letter-spacing: 1px;
`;
const Duration = styled.span`
  font-size: 1rem;
  line-height: 31px;
  font-weight: normal;
  color: #f5eded;
  letter-spacing: 1px;
`;
const BodyWrapper = styled.div`
  font-size: 1rem;
  line-height: 31px;
  font-weight: normal;
  color: #f5eded;
  letter-spacing: 1px;
`;

export default ExpBox;
