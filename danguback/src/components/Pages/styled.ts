import styled from "styled-components";

export const BodyCotainer = styled.div`
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  position: relative;
  background-color: #242424;
`;

export const Light = styled.div`
  position: fixed;

  width: 1444px;
  height: 847px;
  left: -100px;
  top: -229px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  pointer-events: none;
`;

export const HeaderLogo = styled.img`
  position: fixed;
  left: 100px;
  top: 60px;

  width: 4rem;
`;

export const HeaderTextLayout = styled.div`
  position: fixed;
  right: 100px;
  top: 60px;

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

export const LinkLayout = styled.div`
  position: fixed;
  left: 100px;
  bottom: 100px;

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
  position: fixed;
  right: 100px;
  bottom: 100px;

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
