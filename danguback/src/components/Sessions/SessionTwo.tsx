import React from "react";
import * as S from "./styled";

const SessionTwo = () => {
  return (
    <S.SessionContainer>
      <S.SeTwoTitle>Introduce</S.SeTwoTitle>
      <S.SeTwoText>
        당유백은 당신은 유능한 백엔드라는 뜻의 팀입니다. <br />
        우리는 항상 <S.SeTwoTextPoint>"유능"</S.SeTwoTextPoint>한 인재와
        함께하며 <br />
        우리가 가진 모든 것을 공유하며 성장하자는
        <br /> 신념을 갖고 성장합니다.
      </S.SeTwoText>
      <S.SeTwoSubLayout>
        <S.SeTwoTextLayout>
          <S.SeTwoSubTitle>Phone</S.SeTwoSubTitle>
          <S.SeTwoSubText>(+82) 010-2930-9275</S.SeTwoSubText>
        </S.SeTwoTextLayout>
        <S.SeTwoLine />
        <S.SeTwoTextLayout>
          <S.SeTwoSubTitle>E-mail</S.SeTwoSubTitle>
          <S.SeTwoSubText>Yongjinlee0222@gmail.com</S.SeTwoSubText>
        </S.SeTwoTextLayout>
      </S.SeTwoSubLayout>
    </S.SessionContainer>
  );
};

export default SessionTwo;
