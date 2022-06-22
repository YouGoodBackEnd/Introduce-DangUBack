import React from "react";
import Logo from "../../assets/svg/Logo.svg";
import FaceBook from "../../assets/svg/FaceBook.svg";
import GitHub from "../../assets/svg/GitHub.svg";
import * as S from "./styled";

const Fixed = () => {
  return (
    <S.TemplateContainer>
      <S.Light />
      <S.HeaderLayout>
        <S.HeaderLogo src={Logo} />
        <S.HeaderTextLayout>
          <S.HeaderMenuText>Home</S.HeaderMenuText>
          <S.HeaderMenuText>Introduce</S.HeaderMenuText>
          <S.HeaderMenuText>Project</S.HeaderMenuText>
          <S.HeaderMenuText>Member</S.HeaderMenuText>
        </S.HeaderTextLayout>
      </S.HeaderLayout>
      <S.FootterLayout>
        <S.LinkLayout>
          <S.LinkButton
            href="https://github.com/YouGoodBackEnd"
            target="_blank"
          >
            <img src={GitHub} />
          </S.LinkButton>
          <S.LinkButton>
            <img src={FaceBook} />
          </S.LinkButton>
        </S.LinkLayout>
        <S.ScrollLayout>
          <S.ScrollLine h="160px" />
          <S.ScrollText>Scroll</S.ScrollText>
          <S.ScrollLine h="105px" />
        </S.ScrollLayout>
      </S.FootterLayout>
    </S.TemplateContainer>
  );
};

export default Fixed;
