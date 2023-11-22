// JS 영역입니다.
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWritePage from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.graphql";
export default function BoardWriteJs() {
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
    <BoardWritePage
      sellerChangeEvent={sellerChangeEvent}
      productChangeEvent={productChangeEvent}
      contentsChangeEvent={contentsChangeEvent}
      priceChangeEvent={priceChangeEvent}
      onClickSubmit={onClickSubmit}
    />
  );
}
