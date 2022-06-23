import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";

const SessionOne = () => {
  const TitleAnimation = useRef<any>();
  const TextAnimation1 = useRef<any>();
  const TextAnimation2 = useRef<any>();

  useEffect(() => {
    TitleAnimation.current.style.left = "0px";
    TextAnimation1.current.style.opacity = 1;
    TextAnimation2.current.style.opacity = 1;
    TextAnimation1.current.style.bottom = "0px";
    TextAnimation2.current.style.top = "0px";
  }, []);

  return (
    <S.SessionContainer>
      <S.SeOneTextLayout>
        <S.SeOneTextOne ref={TextAnimation1}>
          우리가 추구하는 것은
        </S.SeOneTextOne>
        <S.SeOneTitleLayout>
          <S.SeOneTitleLine />
          <S.SeOneTitle ref={TitleAnimation}>당신도 유능한 백엔드</S.SeOneTitle>
        </S.SeOneTitleLayout>
        <S.SeOneTextTwo ref={TextAnimation2}>
          <S.SeOneTextPoint>"유능"</S.SeOneTextPoint> 이다
        </S.SeOneTextTwo>
      </S.SeOneTextLayout>
    </S.SessionContainer>
  );
};

export default SessionOne;
