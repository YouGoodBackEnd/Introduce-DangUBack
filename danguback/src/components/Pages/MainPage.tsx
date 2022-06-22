import React from "react";
import Fixed from "./Fixed";
import SessionOne from "../Sessions/SessionOne";
import SessionTwo from "../Sessions/SessionTwo";
import SessionThree from "../Sessions/SessionThree";
import SessionFour from "../Sessions/SessionFour";
import * as S from "./styled";

const MainPage = () => {
  return (
    <S.BodyCotainer>
      <Fixed />
      <SessionOne />
      <SessionTwo />
      <SessionThree />
      <SessionFour />
    </S.BodyCotainer>
  );
};

export default MainPage;
