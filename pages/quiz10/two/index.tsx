import { useRouter } from "next/router";
import {
  BigBox,
  FirstBox,
  MiddleArea,
  NavArea,
  SideBarArea,
  TopArea,
  SecondBox,
  BottomArea,
} from "../../../styles/10-Layout";

export default function LayoutPage() {
  const router = useRouter();
  let test = JSON.stringify(router.route);
  test.slice(1, 8);

  let test2 = "/quiz10/two";
  test2 = test2.slice(8, test2.length);
  console.log(test2);
  return (
    <BigBox>
      <TopArea>푸터영역</TopArea>
      <MiddleArea>배너영역</MiddleArea>
      <NavArea>네비게이션 영역</NavArea>
      <SideBarArea>
        <FirstBox>사이드바 영역</FirstBox>
        <SecondBox>{test2} 영역</SecondBox>
      </SideBarArea>
      <BottomArea>바텀영역</BottomArea>
    </BigBox>
  );
}
