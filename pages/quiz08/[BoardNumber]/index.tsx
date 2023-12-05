import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import TSTest from "..";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      number
    }
  }
`;

export default function BoardCheck(): JSX.Element {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState<Boolean>(false);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.BoardNumber),
    },
  });

  const ChangeMode = (): void => {
    setIsEdit(!isEdit);
  };

  console.log(data);

  return (
    <div>
      {isEdit ? (
        <TSTest
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          number={router.query.BoardNumber}
          writer={data?.fetchBoard?.writer}
          title={data?.fetchBoard?.title}
          contents={data?.fetchBoard?.contents}
        />
      ) : (
        <div>
          <p>{data?.fetchBoard?.writer}</p>
          <p>{data?.fetchBoard?.title}</p>
          <p>{data?.fetchBoard?.contents}</p>
        </div>
      )}
      <button onClick={ChangeMode}>수정모드 전환 </button>
    </div>
  );
}
