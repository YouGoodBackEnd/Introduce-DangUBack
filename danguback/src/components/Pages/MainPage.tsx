import React, { useRef } from "react";
import Fixed from "./Fixed";
import SessionOne from "../Sessions/SessionOne";
import SessionTwo from "../Sessions/SessionTwo";
import SessionThree from "../Sessions/SessionThree";
import SessionFour from "../Sessions/SessionFour";
import * as S from "./styled";

const MainPage = () => {
  const array = ["#home", "#introduce", "#project", "#member"];
  let page = 0;
  let scroll = true;

  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 90 && page < array.length - 1 && scroll) {
      movePage(1);
    }
    if (e.deltaY < -90 && page > 0 && scroll) {
      movePage(-1);
    }
  });

  const movePage = (n: number) => {
    page += n;
    scroll = false;
    window.location.href = array[page];
    setTimeout(() => {
      scroll = true;
    }, 300);
  };

  return (
    <S.BodyCotainer>
      <Fixed />
      <SessionOne />
      <SessionTwo page={page} />
      <SessionThree />
      <SessionFour />
    </S.BodyCotainer>
  );
};

export default MainPage;
