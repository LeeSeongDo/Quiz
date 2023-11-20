import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function WatchPage() {
  try {
    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCT, {
      variables: {
        productId: router.query.productNumber,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <div>
        <p>판매자</p>
        <span>{data?.fetchProduct.seller}</span>
      </div>

      <div>
        <p>상품명</p>
        <span>{data?.fetchProduct.name}</span>
      </div>

      <div>
        <p>자세한 내용</p>
        <span>{data?.fetchProduct.detail}</span>
      </div>

      <div>
        <p>가격 {data?.fetchProduct.price}원</p>
      </div>
    </div>
  );
}
