import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;

let test = {
  writer: "",
  title: "",
  contents: "",
};

export default function TSTest(props): JSX.Element {
  const [Boards] = useMutation(CREATE_BOARD);
  const [UpdateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();
  const [writer, setWriter] = useState<String>("");
  const [title, setTitle] = useState<String>("");
  const [contents, setContents] = useState<String>("");

  const chagneWriter = (e): void => {
    setWriter(e.target.value);
  };

  const chagneTitle = (e): void => {
    setTitle(e.target.value);
  };
  const chagneContents = (e): void => {
    setContents(e.target.value);
  };

  const ClickAPI = async () => {
    const result = await Boards({
      variables: {
        writer,
        title,
        contents,
      },
    });
    router.push(`/quiz08/${result?.data?.createBoard?.number}`);
  };

  console.log(`작성자 ${writer} 제목 ${title} 내용 ${contents}`);

  if (writer === "") {
    test.writer = props?.writer;
  }
  if (title === "") {
    test.title = props?.title;
  }
  if (contents === "") {
    test.contents = props?.contents;
  }

  console.log(test);

  const UPDATEAPI = async () => {
    const result = await UpdateBoard({
      variables: {
        number: Number(props?.number),
        writer: writer.length === 0 ? test.writer : writer,
        title: title.length === 0 ? test.title : title,
        contents: contents.length === 0 ? test.contents : contents,
      },
    });
    console.log(result);
    props?.setIsEdit(false);
    router.push(`/quiz08/${result?.data?.updateBoard?.number}`);
  };

  return (
    <div>
      <div>
        <span>작성자 : </span>
        <input
          type="text"
          onChange={chagneWriter}
          defaultValue={props?.writer}
        />
      </div>

      <div>
        <span>제목명 : </span>
        <input type="text" onChange={chagneTitle} defaultValue={props?.title} />
      </div>

      <div>
        <span>자세한 내용 : </span>
        <input
          type="text"
          onChange={chagneContents}
          defaultValue={props?.contents}
        />
      </div>

      <button onClick={props?.isEdit ? UPDATEAPI : ClickAPI}>
        GRAPHQL-API 요청하기
      </button>
    </div>
  );
}
