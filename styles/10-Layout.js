import styled from "@emotion/styled";
export const BigBox = styled.div`
  width: 100%;
  height: 100vh;
`;

export const TopArea = styled.div`
  width: 100%;
  height: 10%;
  background-color: orangered;
`;

export const MiddleArea = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  background-size: cover;
`;

export const NavArea = styled.div`
  @font-face {
    font-family: "scifibit";
    src: url("/scifibit.ttf");
  }
  font-family: "scifibit";
  width: 100%;
  height: 10%;
  background-color: orange;
`;

export const SideBarArea = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
`;

export const FirstBox = styled.div`
  width: 40%;
  height: 100%;
  background-color: skyblue;
`;

export const SecondBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const BottomArea = styled.div`
  width: 100%;
  height: 10%;
  background-color: green;
`;
