import styled from "@emotion/styled";

export const BackImage = styled.div`
  width: 640px;
  height: 1138px;
  background-image: url("/backgroundImage.png");
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const CenterBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const WriteArea = styled.div`
  height: 83px;
`;

export const InnerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const IconImage = styled.img`
  width: 66.24px;
  height: 82.08px;
  margin-bottom: 20px;
  object-fit: cover;
`;

export const MainText = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 86.88px;
  color: white;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #cacaca;
`;

export const InputArea = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  width: 540px;
  padding: 5px;
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #ff1b6d;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  width: 540px;
  height: 76px;
  padding: 10px;
  background-color: #ff1b6d;
  border: none;
  border-radius: 30px;
  opacity: 60%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const LoginText = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 700;
`;

export const MenuBox = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const MenuWall = styled.p`
  height: 25px;
  border: 1px solid #9f9f9f;
`;

export const KaKaoButton = styled.div`
  cursor: pointer;
  width: 540px;
  height: 76px;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-radius: 30px;
  color: #fae100;
  border: 2px solid #fae100;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: 700;
`;

export const KakaoIconImage = styled.img`
  width: 32.45px;
  height: 29.97px;
  margin-right: 20px;
  object-fit: cover;
`;
