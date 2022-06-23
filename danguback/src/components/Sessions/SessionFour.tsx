import React, { useState } from "react";
import * as S from "./styled";
import ArrowLow from "../../assets/svg/ArrowLow.svg";
import ArrowHigh from "../../assets/svg/ArrowHigh.svg";

const SessionFour = () => {
  const [members, setMembers] = useState<any>([
    { Field: "FrontEnd", Name: ["손지원"], active: false, part: "당" },
    { Field: "Android", Name: ["이용진"], active: false, part: "유" },
    { Field: "Designer", Name: ["손지원"], active: false, part: "백" },
  ]);

  const ChangeActive = (e: any) => {
    const { className } = e.target;
    console.log(e)
    setMembers(
      members.map((x: any) =>
        x.active === className ? { ...x, active: !x.active } : x
      )
    );
  };

  const membersMap = members.map((x: any, index: number) => {
    return (
      <S.FieldBox key={index}>
        <S.FieldName>{x.Field}</S.FieldName>
        <S.FieldImg onClick={ChangeActive} src={x.active ? ArrowHigh : ArrowLow} className={x.Field} />
        {x.active ? (
          <S.MembersBoxOn>
            {x.Name.map((x: string) => {
              return <S.MembersName>{x}</S.MembersName>;
            })}
          </S.MembersBoxOn>
        ) : (
          <S.MembersBoxOff>{x.part}</S.MembersBoxOff>
        )}
      </S.FieldBox>
    );
  });

  return (
    <S.SessionContainer>
      <S.SeTwoTitle>Members</S.SeTwoTitle>
      <S.SeFourLine />
      <S.FieldLayout>{membersMap}</S.FieldLayout>
    </S.SessionContainer>
  );
};

export default SessionFour;
