// 상세
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function ProductDetail() {
  const router = useRouter();
  console.log(router.query.productId);

  const { data } = useQuery(fetchProduct, {
    variables: {
      productId: router?.query?.productId,
    },
  });
  console.log(data);

  const MoveToEditPage = () => {
    router.push(`/quiz07/Edit/${router?.query?.productId}`);
  };

  return (
    <div>
      <h2>상품 상세 화면 입니다.</h2>

      <div>
        <span>판매자 : {data?.fetchProduct?.seller}</span>
      </div>

      <div>
        <span>상품명 {data?.fetchProduct?.name}</span>
      </div>

      <div>
        <span>상세정보 {data?.fetchProduct?.detail}</span>
      </div>

      <div>
        <span>가격 {data?.fetchProduct?.price}</span>
      </div>

      <button onClick={MoveToEditPage}>수정하기</button>
    </div>
  );
}
