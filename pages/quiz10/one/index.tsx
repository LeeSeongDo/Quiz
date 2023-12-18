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
  let test = router.asPath;

  test = test.slice(8, test.length);

  return (
    <BigBox>
      <TopArea>푸터영역</TopArea>
      <MiddleArea>배너영역</MiddleArea>
      <NavArea>네비게이션 영역</NavArea>
      <SideBarArea>
        <FirstBox>사이드바 영역</FirstBox>
        <SecondBox>{test} 영역</SecondBox>
      </SideBarArea>
      <BottomArea>바텀영역</BottomArea>
    </BigBox>
  );
}
