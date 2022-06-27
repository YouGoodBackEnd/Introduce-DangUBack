import React from "react";
import Logo from "../../assets/svg/Logo.svg";
import FaceBook from "../../assets/svg/FaceBook.svg";
import GitHub from "../../assets/svg/GitHub.svg";
import * as S from "./styled";

const Fixed = () => {
  return (
    <>
      <S.Light />
      <S.HeaderMenuText href="#home">
        <S.HeaderLogo src={Logo} />
      </S.HeaderMenuText>
      <S.HeaderTextLayout>
        <S.HeaderMenuText href="#home">Home</S.HeaderMenuText>
        <S.HeaderMenuText href="#introduce">Introduce</S.HeaderMenuText>
        <S.HeaderMenuText href="#project">Project</S.HeaderMenuText>
        <S.HeaderMenuText href="#member">Member</S.HeaderMenuText>
      </S.HeaderTextLayout>
      <S.LinkLayout>
        <S.LinkButton href="https://github.com/YouGoodBackEnd" target="_blank">
          <img src={GitHub} />
        </S.LinkButton>
        <S.LinkButton href="https://www.facebook.com/DangUBack" target="_blank">
          <img src={FaceBook} />
        </S.LinkButton>
      </S.LinkLayout>
      {/* <S.ScrollLayout>
        <S.ScrollLine h="160px" />
        <S.ScrollText>Scroll</S.ScrollText>
        <S.ScrollLine h="105px" />
      </S.ScrollLayout> */}
    </>
  );
};

export default Fixed;
