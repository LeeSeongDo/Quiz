import { useState } from "react";

export default function Question1() {
  // 회원가입 화면을 다음의 조건에 맞게 만들어 주세요.
  // (이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼 총 4개를 각각 만들어 주세요.)
  //  각각의 입력값을 state 변수(state 이름은 스스로 결정해 주세요)에 저장해 주세요.
  // 4-1) state를 사용해 주세요.
  // 4-2) 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
  //           ⇒ 조건1) 이메일에 @가 없으면 에러입니다.
  //           ⇒ 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다.
  //           ⇒ 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.
  // 4-3) 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [emailBool, setEmailBool] = useState(false);
  const [passBool, setPassBool] = useState(false);

  let LoginEvent = () => {
    if (email.includes("@") === false) {
      setEmailBool(true);
    } else {
      setEmailBool(false);
      if (password === password2) {
        alert("가입성공");
      }
    }

    if (password !== password2) {
      setPassBool(true);
    } else {
      setPassBool(false);
    }
  };

  let EmailWrite = (e) => {
    setEmail(e.target.value);
    if (email.includes("@") === true) {
      setEmailBool(true);
    }
  };

  return (
    <div>
      <div>
        <span>이메일</span>
        <input
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p style={emailBool ? { color: "red" } : { display: "none" }}>
          이메일을 다시 입력해주세요
        </p>
      </div>

      <div>
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={passBool ? { color: "red" } : { display: "none" }}>
          비밀번호를 다시 입력해주세요.
        </p>
      </div>

      <div>
        <span>비밀번호 재확인</span>
        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <span></span>
      </div>

      <button onClick={LoginEvent}>로그인하기</button>
    </div>
  );
}
