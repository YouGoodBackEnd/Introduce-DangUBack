import styled from "styled-components";

export const BodyCotainer = styled.div`
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  position: relative;
  background-color: #242424;
`;

export const TemplateContainer = styled.div`
  position: fixed;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
`;

export const Light = styled.div`
  position: absolute;

  width: 1444px;
  height: 847px;
  left: -100px;
  top: -229px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  );

`;

export const HeaderLayout = styled.div`
  pointer-events: all;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 50vw;
  width: 100%;
  margin-top: 40px;
`;

export const HeaderLogo = styled.img`
  width: 4rem;
`;

export const HeaderTextLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const HeaderMenuText = styled.p`
  cursor: pointer;
  transition: all 0.2s;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 30px;
  color: #d7d7d7;

  margin: 0px;

  :hover {
    color: #ffffff;
  }
`;

export const FootterLayout = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 58vw;

  width: 100%;
  margin-bottom: 70px;
`;

export const LinkLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const LinkButton = styled.a`
  cursor: pointer;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  border: none;
  width: 38px;
  height: 38px;
  border: none;
  background-color: #242424;
`;

export const ScrollLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

type props = {
  h: string;
};

export const ScrollLine = styled.div<props>`
  width: 2px;
  height: ${(props) => props.h};

  background: #d7d7d7;
`;

export const ScrollText = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #d7d7d7;
  transform: rotate(90deg);
`;
