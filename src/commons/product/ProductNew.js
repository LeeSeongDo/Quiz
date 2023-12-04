// 생성

import {
  ProductNewBigBox,
  ProductNewButtonBox,
  ProductNewContentBox,
  input,
} from "./styles/ProductNew.styled";

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

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

export default function ProductNew() {
  const [Product] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const chagneSeller = (e) => {
    setSeller(e.target.value);
  };

  const chagneName = (e) => {
    setName(e.target.value);
  };
  const chagneDetail = (e) => {
    setDetail(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(Number(e.target.value));
    console.log(typeof price);
  };

  const CreateProduct = async () => {
    const result = await Product({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price,
        },
      },
    });
    router.push(`/quiz07/Detail/${result.data?.createProduct?._id}`);
  };

  return (
    <ProductNewBigBox>
      <h2>상품 등록 화면 입니다.</h2>
      <ProductNewContentBox>
        <span>판매자명 :</span>
        <input
          type="text"
          placeholder="판매자명을 적어주세요"
          onChange={chagneSeller}
        />
      </ProductNewContentBox>

      <ProductNewContentBox>
        <span>상품명 :</span>
        <input
          type="text"
          placeholder="상품명을 적어주세요"
          onChange={chagneName}
        />
      </ProductNewContentBox>

      <ProductNewContentBox>
        <span>가격 :</span>
        <input
          type="text"
          placeholder="가격을 적어주세요"
          onChange={changePrice}
        />
      </ProductNewContentBox>

      <ProductNewContentBox>
        <span>상세정보 :</span>
        <input
          type="text"
          placeholder="상세정보을 적어주세요"
          onChange={chagneDetail}
        />
      </ProductNewContentBox>

      <ProductNewButtonBox>
        <button onClick={CreateProduct}>등록하기</button>
        <button>취소하기</button>
      </ProductNewButtonBox>
    </ProductNewBigBox>
  );
}
