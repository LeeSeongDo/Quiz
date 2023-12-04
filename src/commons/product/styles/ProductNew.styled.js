// 생성 페이지 css
import styled from "@emotion/styled";

// 생성하는곳에서 제일 큰 박스
export const ProductNewBigBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductNewContentBox = styled.div`
  width: 250px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  height: auto;

  input {
    padding: 5px;
  }
`;

export const ProductNewButtonBox = styled.div`
  width: 250px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  height: auto;

  button {
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
  }

  button:nth-child(2) {
    background-color: transparent;
    color: black;
  }

  button:nth-child(1) {
    background-color: blue;
    color: white;
  }
`;
