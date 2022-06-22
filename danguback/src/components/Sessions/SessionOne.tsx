import React from "react";
import * as S from "./styled";

const SessionOne = () => {
  return (
    <S.SessionContainer>
      <S.SeOneTextLayout>
        <S.SeOneText marginR="240px" marginL="0px">
          우리가 추구하는 것은
        </S.SeOneText>
        <S.SeOneTitleLayout>
          <S.SeOneTitleLine />
          <S.SeOneTitle>당신도 유능한 백엔드</S.SeOneTitle>
        </S.SeOneTitleLayout>
        <S.SeOneText marginR="0px" marginL="300px">
          <S.SeOneTextPoint>"유능"</S.SeOneTextPoint> 이다
        </S.SeOneText>
      </S.SeOneTextLayout>
    </S.SessionContainer>
  );
};

export default SessionOne;
