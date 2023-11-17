// Graphql ㅜㅁ제
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PROFILE = gql`
  mutation createProfile($name: String, $age: Int, $school: String) {
    createProfile(name: $name, age: $age, school: $school) {
      _id
      number
      message
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlPage() {
  const [Boards] = useMutation(CREATE_PRODUCT);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");

  const chagneWriter = (e) => {
    setWriter(e.target.value);
  };

  const chagneTitle = (e) => {
    setTitle(e.target.value);
  };
  const chagneContents = (e) => {
    setContents(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(Number(e.target.value));
    console.log(typeof price);
  };

  const ClickAPI = async () => {
    const result = await Boards({
      variables: {
        seller: writer,
        createProductInput: {
          name: title,
          detail: contents,
          price: price,
        },
      },
    });
    console.log(result);
  };

  return (
    <div>
      <div>
        <span>판매자 : </span>
        <input type="text" onChange={chagneWriter} />
      </div>

      <div>
        <span>상품명 : </span>
        <input type="text" onChange={chagneTitle} />
      </div>

      <div>
        <span>자세한 내용 : </span>
        <input type="text" onChange={chagneContents} />
      </div>

      <div>
        <span>가격 : </span>
        <input type="text" onChange={changePrice} />
      </div>

      <button onClick={ClickAPI}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
