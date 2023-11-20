import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
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

export default function WritePage() {
  const [seller, setSeller] = useState();
  const [product, setProduct] = useState();
  const [contents, setContents] = useState();
  const [price, setPrice] = useState();

  const sellerChangeEvent = (e) => {
    setSeller(e.target.value);
  };

  const productChangeEvent = (e) => {
    setProduct(e.target.value);
  };

  const contentsChangeEvent = (e) => {
    setContents(e.target.value);
  };

  const priceChangeEvent = (e) => {
    setPrice(e.target.value);
  };

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      if (seller && product && price && contents) {
        const result = await createProduct({
          variables: {
            seller: seller,
            createProductInput: {
              name: product,
              detail: contents,
              price: Number(price),
            },
          },
        });
        router.push(`/quiz04/watchArea/${result.data?.createProduct?._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <span>판매자</span>
        <input type="text" onChange={sellerChangeEvent} />
      </div>

      <div>
        <span>상품명</span>
        <input type="text" onChange={productChangeEvent} />
      </div>

      <div>
        <span>상품내용</span>
        <input type="text" onChange={contentsChangeEvent} />
      </div>

      <div>
        <span>상품가격</span>
        <input type="text" onChange={priceChangeEvent} />
      </div>

      <div>
        <button onClick={onClickSubmit}>전송하기 </button>
      </div>
    </div>
  );
}
