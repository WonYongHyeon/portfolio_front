import MainIntroduce from "../../common/MainItem/introduce/introduce.container";
import * as S from "./main.styles";
import { SkillDataType, IntroduceDataType } from "../../common/data";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MainSkill from "../../common/MainItem/skill/skill.container";
import MainProject from "../../common/MainItem/project/project.container";
import MainTil from "../../common/MainItem/TIL/til.container";

interface Props {
  skill: SkillDataType;
  introduce: IntroduceDataType;
  onClickRoute: (link: string) => void;
  onClickSkillBox: (text: string) => void;
}

export default function MainUI(props: Props) {
  return (
    <S.Wrapper>
      <MainIntroduce></MainIntroduce>
      <MainSkill></MainSkill>
      <MainProject></MainProject>
      <MainTil></MainTil>
    </S.Wrapper>
  );
}
