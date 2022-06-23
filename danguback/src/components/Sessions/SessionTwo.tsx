import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";

type SessionTwoType = {
  page: number;
};

const SessionTwo: React.FC<SessionTwoType> = ({ page }) => {
  const LineAnimation = useRef<any>();
  const TextAnimation1 = useRef<any>();
  const TextAnimation2 = useRef<any>();
  let OnAndOff = true;

  window.addEventListener("hashchange", () => {
    if (window.location.hash == "#introduce" && OnAndOff) {
      OnAndOff = false;
      setTimeout(() => {
        LineAnimation.current.style.top = "0px";
        LineAnimation.current.style.opacity = 1;
        TextAnimation1.current.style.opacity = 1;
        TextAnimation2.current.style.opacity = 1;
        TextAnimation1.current.style.right = "0px";
        TextAnimation2.current.style.left = "0px";
        OnAndOff = false;
      }, 500);
    }
  });

  return (
    <S.SessionContainer id="introduce">
      <S.SeTwoTitle>Introduce</S.SeTwoTitle>
      <S.SeTwoText>
        당유백은 당신은 유능한 백엔드라는 뜻의 팀입니다. <br />
        우리는 항상 <S.SeTwoTextPoint>"유능"</S.SeTwoTextPoint>한 인재와
        함께하며 <br />
        우리가 가진 모든 것을 공유하며 성장하자는
        <br /> 신념을 갖고 성장합니다.
      </S.SeTwoText>
      <S.SeTwoSubLayout>
        <S.SeTwoTextLayout1 ref={TextAnimation1}>
          <S.SeTwoSubTitle>Phone</S.SeTwoSubTitle>
          <S.SeTwoSubText>(+82) 010-2930-9275</S.SeTwoSubText>
        </S.SeTwoTextLayout1>
        <S.SeTwoLine ref={LineAnimation} />
        <S.SeTwoTextLayout2 ref={TextAnimation2}>
          <S.SeTwoSubTitle>E-mail</S.SeTwoSubTitle>
          <S.SeTwoSubText>Yongjinlee0222@gmail.com</S.SeTwoSubText>
        </S.SeTwoTextLayout2>
      </S.SeTwoSubLayout>
    </S.SessionContainer>
  );
};

export default SessionTwo;
