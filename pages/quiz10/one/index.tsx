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
import { Global } from "@emotion/react";
import { globalStyles } from "../../../public/styles/globalStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutPage({ globalStyles }) {
  const router = useRouter();
  let test = router.asPath;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <BigBox>
        <TopArea>푸터영역</TopArea>
        <MiddleArea>
          <div
            style={{
              width: "40%",
              height: "100px",
              border: "1px solid black",
            }}
          >
            <Slider {...settings}>
              <div>
                <img src="/Group.png" alt="" />
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </MiddleArea>
        <NavArea>Nav</NavArea>
        <SideBarArea>
          <FirstBox>사이드바 영역</FirstBox>
          <SecondBox>{test} 영역</SecondBox>
        </SideBarArea>
        <BottomArea>바텀영역</BottomArea>
      </BigBox>
    </>
  );
}
