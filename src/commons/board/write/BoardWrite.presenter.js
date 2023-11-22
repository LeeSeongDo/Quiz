// html 영역입니다.

export default function BoardWritePage(props) {
  return (
    <div>
      <div>
        <span>판매자</span>
        <input type="text" onChange={props.sellerChangeEvent} />
      </div>

      <div>
        <span>상품명</span>
        <input type="text" onChange={props.productChangeEvent} />
      </div>

      <div>
        <span>상품내용</span>
        <input type="text" onChange={props.contentsChangeEvent} />
      </div>

      <div>
        <span>상품가격</span>
        <input type="text" onChange={props.priceChangeEvent} />
      </div>

      <div>
        <button onClick={props.onClickSubmit}>전송하기 </button>
      </div>
    </div>
  );
}
