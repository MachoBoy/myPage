import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import * as SkillActions from "../../module/Skills";
import { connect } from "react-redux";
import SkillBoxes from "../SkillBoxes/SkillBox";
import ExpBox from "../ExpBox/ExpBox";

const RightPanel = (props) => {
  const { skills, exps, navData } = props;
  console.log(skills);
  return (
    <RightWrapper>
      <InnerWrapper>
        <SkillSection active={navData[0].isActive}>
          {skills.map((skill) => {
            const { icon, code, number, color } = skill;
            return (
              <SkillBoxes
                key={code}
                icon={icon}
                code={code}
                number={number}
                color={color}
              />
            );
          })}
        </SkillSection>
        <ExpSection active={navData[1].isActive}>
          {exps.map((exp) => {
            const { icon, name, desc, duration } = exp;
            return (
              <ExpBox
                key={name}
                icon={icon}
                name={name}
                desc={desc}
                duration={duration}
              />
            );
          })}
        </ExpSection>
      </InnerWrapper>
    </RightWrapper>
  );
};

const RightWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 760px;
  height: 100%;
  overflow-y: auto;
`;

const InnerWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  padding-right: 4.4rem;
  padding-top: 4.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const SkillSection = styled.div`
  width: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const ExpSection = styled.div`
  width: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const mapStateToProps = (state) => ({
  skills: state.Skills.skills,
  exps: state.ExpData.expData,
  navData: state.NavData.navData,
});

export default connect(mapStateToProps)(RightPanel);
