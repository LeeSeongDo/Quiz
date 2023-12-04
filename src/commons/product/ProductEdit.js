// 생성

import {
  ProductNewBigBox,
  ProductNewButtonBox,
  ProductNewContentBox,
  input,
} from "./styles/ProductNew.styled";

import { useMutation, useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: ID
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
    ) {
      _id
      number
      message
    }
  }
`;

const fetchProduct = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductEdit() {
  const [Product] = useMutation(UPDATE_PRODUCT);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

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

  const { data } = useQuery(fetchProduct, {
    variables: {
      productId: router?.query?.productId,
    },
  });

  //   	//변경된 값만 객체에 key와 value 추가해주기
  // if(myWriter !== ""){ myVariables.writer = myWriter}
  // if(myTitle !== ""){ myVariables.title = myTitle}
  // if(myContents !== ""){ myVariables.contents = myContents}

  const myVariables = {};

  if (name !== "") {
    myVariables.name = name;
  }
  if (detail !== "") {
    myVariables.detail = detail;
  }
  if (price !== 0) {
    myVariables.price = price;
  }

  const UpdateProduct = async () => {
    const result = await Product({
      variables: {
        productId: router?.query?.productId,
        updateProductInput: myVariables,
      },
    });
    router.push(`/quiz07/Detail/${result.data?.updateProduct?._id}`);
  };

  return (
    <ProductNewBigBox>
      <h2>상품 수정 화면 입니다.</h2>
      <ProductNewContentBox>
        <span>판매자명 :</span>
        <input
          type="text"
          placeholder="판매자명을 적어주세요"
          onChange={chagneSeller}
          defaultValue={data?.fetchProduct?.seller}
        />
      </ProductNewContentBox>

      <ProductNewContentBox>
        <span>상품명 :</span>
        <input
          type="text"
          placeholder="상품명을 적어주세요"
          onChange={chagneName}
          defaultValue={data?.fetchProduct?.name}
        />
      </ProductNewContentBox>

      <ProductNewContentBox>
        <span>가격 :</span>
        <input
          type="text"
          placeholder="가격을 적어주세요"
          onChange={changePrice}
          defaultValue={data?.fetchProduct?.price}
        />
      </ProductNewContentBox>

      <ProductNewContentBox>
        <span>상세정보 :</span>
        <input
          type="text"
          placeholder="상세정보을 적어주세요"
          onChange={chagneDetail}
          defaultValue={data?.fetchProduct?.detail}
        />
      </ProductNewContentBox>

      <ProductNewButtonBox>
        <button onClick={UpdateProduct}>수정하기</button>
        <button>취소하기</button>
      </ProductNewButtonBox>
    </ProductNewBigBox>
  );
}
