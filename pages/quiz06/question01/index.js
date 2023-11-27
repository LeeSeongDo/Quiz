import { useMutation, useQuery, gql } from "@apollo/client";

const FETCH_PRODUCT = gql`
  query {
    fetchProducts(page: 1) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      number
      message
    }
  }
`;

export default function One() {
  const { data } = useQuery(FETCH_PRODUCT);
  const data2 = data?.fetchProducts;

  console.log(data2);

  const [deleteBoards] = useMutation(DELETE_PRODUCT);

  const ClickDelete = (e) => {
    deleteBoards({
      variables: {
        productId: e.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCT }],
    });
  };

  return (
    <>
      {data?.fetchProducts?.map((dd) => (
        <div key={dd._id}>
          <span style={{ margin: "10px" }}>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{dd.seller}</span>
          <span style={{ margin: "10px" }}>{dd.name}</span>
          <span style={{ margin: "10px" }}>{dd.detail}</span>
          <span style={{ margin: "10px" }}>{dd.price}</span>
          <span>
            <button id={dd._id} onClick={ClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </>
  );
}
