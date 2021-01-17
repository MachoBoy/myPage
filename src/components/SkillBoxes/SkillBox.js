import React from "react";
import styled from "styled-components";
import ProgressContainer from "./ProgessBar";

const SkillBox = (props) => {
  const { icon, code, number, color } = props;
  return (
    <SkillContainer>
      <IconWrapper className="iconWrapper">
        <CodeIcon className="codeIcon" src={icon} />
      </IconWrapper>
      <CodeText>{code}</CodeText>
      <ProgressContainer number={number} color={color}></ProgressContainer>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  margin: 5px;
  padding: 5px 25px;
  background: #36363a;
  border-radius: 15px;
  width: 100%;
  max-width: 480px;
  height: 111px;
  display: flex;
  align-items: center;
  justify-content: start;
  &:nth-child(4) {
    .iconWrapper {
      .codeIcon {
        width: 145%;
      }
    }
  }
`;
const IconWrapper = styled.div`
  position: relative;
  width: 70px;
`;
const CodeIcon = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CodeText = styled.h3`
  text-align: right;
  margin: 0;
  width: 30%;
  font-size: 24px;
  line-height: 50px;
  font-weight: normal;
  color: #f5eded;
`;

export default SkillBox;
