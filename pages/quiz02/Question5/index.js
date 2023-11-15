import { MediumBox, SpaceBetween } from "../../../styles/Quiz01";
import {
  BackImage,
  CenterBox,
  MainText,
  InnerBox,
  IconImage,
  InputArea,
  ErrorText,
  InputBox,
  LoginButton,
  LoginText,
  MenuBox,
  MenuText,
  MenuWall,
  KaKaoButton,
  KakaoIconImage,
  WriteArea,
} from "../../../styles/Quiz02";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailBool, setEmailBool] = useState(false);
  const [passBool, setPassBool] = useState(false);

  let LoginEvent = () => {
    if (email.includes("@") && password.length > 8) {
      alert("성공");
      setEmailBool(false);
      setPassBool(false);
    } else {
      if (email.includes("@") === false) {
        setEmailBool(true);
      }

      if (password.length < 8) {
        setPassBool(true);
      }
    }
  };

  return (
    <BackImage>
      {/* 상단 */}
      <CenterBox>
        <InnerBox>
          <IconImage src="/Group.png" />
          <MainText>잇츠로드</MainText>
        </InnerBox>
      </CenterBox>

      {/* 하단 */}
      <InnerBox>
        <WriteArea>
          <InputBox>
            <InputArea
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <img src="/delete.png" />
          </InputBox>
          {emailBool ? (
            <ErrorText>이메일 주소를 다시 확인해주세요.</ErrorText>
          ) : (
            <></>
          )}
        </WriteArea>

        <WriteArea>
          <InputBox>
            <InputArea
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <img src="/delete.png" />
          </InputBox>

          {passBool ? (
            <ErrorText>
              8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.
            </ErrorText>
          ) : (
            <></>
          )}
        </WriteArea>

        <LoginButton>
          <LoginText onClick={LoginEvent}>로그인</LoginText>
        </LoginButton>

        <MenuBox>
          <MenuText>이메일 찾기</MenuText>
          <MenuWall></MenuWall>
          <MenuText>비밀번호 찾기</MenuText>
          <MenuWall></MenuWall>
          <MenuText>회원가입</MenuText>
        </MenuBox>

        <KaKaoButton>
          <KakaoIconImage src="/kakaoIcon.png" />
          <span>카카오톡으로 로그인</span>
        </KaKaoButton>
      </InnerBox>
    </BackImage>
  );
}
