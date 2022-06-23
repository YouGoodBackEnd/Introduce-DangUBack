import exp from "constants";
import styled from "styled-components";

export const SessionContainer = styled.div`
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background: #242424;
`;

export const SeOneTextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SeOneTextOne = styled.p`
  position: relative;
  bottom: -60px;
  opacity: 0;
  transition: all 1.5s;

  display: flex;
  align-items: center;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 25px;
  color: #d2d2d2;

  margin: 0px;
  margin-right: 240px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const SeOneTextTwo = styled.p`
  position: relative;
  top: -60px;
  opacity: 0;
  transition: all 1.5s;

  display: flex;
  align-items: center;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 25px;
  color: #afafaf;

  margin: 0px;
  margin-left: 300px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const SeOneTextPoint = styled.p`
  font-size: 1.5rem;
  margin: 0px;
`;

export const SeOneTitleLayout = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SeOneTitleLine = styled.div`
  width: 4px;
  height: 60px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  margin-right: 25px;
`;

export const SeOneTitle = styled.p`
  transition: all 1s;
  position: relative;
  left: -800px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 65px;
  color: #ffffff;

  margin: 0px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const SeTwoTitle = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 2em;
  line-height: 54px;
  color: #ffffff;

  margin: 0px;
`;

export const SeTwoText = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3em;
  line-height: 32px;
  text-align: center;
  color: #ffffff;

  margin: 0px;
  margin-top: 35px;
`;

export const SeTwoTextPoint = styled.span`
  font-weight: 700;
  font-size: 1.2em;
`;

export const SeTwoSubLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;

  margin-top: 70px;
  margin-left: 65px;
`;

export const SeTwoTextLayout1 = styled.div`
  transition: all 0.5s;

  position: relative;
  right: -100px;
  opacity: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SeTwoTextLayout2 = styled.div`
  transition: all 0.5s;

  position: relative;
  left: -100px;
  opacity: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SeTwoLine = styled.div`
  transition: all 0.5s;

  position: relative;
  top: -150px;
  opacity: 0;

  width: 3px;
  height: 50px;
  background: #d7d7d7;
  border-radius: 100px;
`;

export const SeTwoSubTitle = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 34px;
  color: #ffffff;

  margin: 0px;
`;

export const SeTwoSubText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 27px;
  color: #d7d7d7;

  margin: 0px;
`;

export const SeThreeTitle = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 68px;
  color: #ffffff;

  margin: 0px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const SeThreeText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 34px;
  color: #ffffff;

  margin: 0px;
  margin-top: 20px;
`;

export const SeFourLine = styled.div`
  width: 76px;
  height: 2px;
  background: #d7d7d7;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const FieldLayout = styled.div`
  display: flex;
  gap: 1vw;
`;

export const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .MembersBoxOnClick {
    height: 347px;
  }
`;

export const FieldName = styled.p`
  cursor: pointer;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 41px;
  color: #ffffff;

  margin: 0px;
`;

export const FieldButton = styled.button`
  cursor: pointer;

  background-color: #242424;
  border: none;
  outline: none;
`;

export const FieldImg = styled.img`
  cursor: pointer;
  pointer-events: none;
`;

export const MembersBoxOff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: #ffffff;

  width: 200px;
  height: 372px;
  background: #242424;
  border-radius: 5px;
`;

export const MembersBoxOn = styled.div`
  transition: all 0.5s;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 200px;
  height: 1px;
  background: #303030;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding-top: 25px;
`;

export const MembersName = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  color: #ffffff;

  margin: 0px;
`;
