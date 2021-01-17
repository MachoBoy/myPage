import React from "react";
import styled from "styled-components";

const ProgressBar = (props) => {
  const { number, color } = props;
  return (
    <ProgressBarContainer>
      <ProgressWrapper>
        <ProgressBars
          className="progressBar"
          number={number}
          color={color}
        ></ProgressBars>
      </ProgressWrapper>
      <ProgressNumber>{number}%</ProgressNumber>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProgressWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  width: 170px;
  height: 12px;
  background-color: #fff;
`;

const ProgressBars = styled.div`
  position: absolute;
  background-color: ${(props) => props.color};
  left: 0;
  top: 0;
  height: 12px;
  width: ${(props) => props.number}%;
`;

const ProgressNumber = styled.h3`
  margin-left: 19px;
  font-size: 20px;
  line-height: 35px;
  font-weight: normal;
  color: #fff;
`;

export default ProgressBar;
