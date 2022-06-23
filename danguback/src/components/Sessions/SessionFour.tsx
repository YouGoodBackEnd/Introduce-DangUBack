import React, { useState } from "react";
import * as S from "./styled";
import ArrowLow from "../../assets/svg/ArrowLow.svg";
import ArrowHigh from "../../assets/svg/ArrowHigh.svg";

const SessionFour = () => {
  const [members, setMembers] = useState<any>([
    { Field: "FrontEnd", Name: ["손지원"], active: false, part: "당" },
    { Field: "BackEnd", Name: ["아직 NULL입니다"], active: false, part: "유" },
    { Field: "Android", Name: ["이용진"], active: false, part: "백" },
    { Field: "ios", Name: ["아직 NULL입니다"], active: false, part: "멤" },
    { Field: "Designer", Name: ["손지원"], active: false, part: "버" },
  ]);

  const ChangeActive = (e: any) => {
    const { name } = e.target;
    setMembers(
      members.map((x: any) =>
        x.Field === name ? { ...x, active: !x.active } : x
      )
    );
    console.log(members);
  };

  const membersMap = members.map((x: any, index: number) => {
    return (
      <S.FieldBox key={index} >
        <S.FieldName>{x.Field}</S.FieldName>
        <S.FieldButton onClick={ChangeActive} name={x.Field}>
          <S.FieldImg src={x.active ? ArrowHigh : ArrowLow} />
        </S.FieldButton>
        {x.active ? (
          <S.MembersBoxOn className={x.active ? "MembersBoxOnClick" : ""}>
            {x.Name.map((x: string) => {
              return <S.MembersName key={index}>{x}</S.MembersName>;
            })}
          </S.MembersBoxOn>
        ) : (
          <S.MembersBoxOff>{x.part}</S.MembersBoxOff>
        )}
      </S.FieldBox>
    );
  });

  return (
    <S.SessionContainer id="member">
      <S.SeTwoTitle>Members</S.SeTwoTitle>
      <S.SeFourLine />
      <S.FieldLayout>{membersMap}</S.FieldLayout>
    </S.SessionContainer>
  );
};

export default SessionFour;
