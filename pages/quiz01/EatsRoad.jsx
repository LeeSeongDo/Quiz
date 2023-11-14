import {
  BigBox,
  FlexBox,
  ProfileBox,
  SpaceBetween,
  ProfileImage,
  RightArrow,
  MediumBox,
  Menu,
  MenuText,
  SelectedText,
  HrLine,
  QuestionForm,
  QuestionTextBox,
  QuestionNumber,
  QuestionText,
  SearchIcon,
  BottomMenu,
  BottomMenuFlexBox,
  BottomMenuText,
  BottomMenuSelectedText,
} from "../../styles/Quiz01";

export default function EatsPage() {
  return (
    <BigBox>
      <MediumBox>
        {/* 두번째 검색 아이콘 부분 */}
        <FlexBox>
          <img src="/searchIcon.png" alt="검색 아이콘" />
        </FlexBox>
        {/* 프로필 영역 */}

        <SpaceBetween>
          <h1>마이</h1>
          <ProfileBox>
            <ProfileImage src="/profileImgae.png" alt="이미지" />
            <h3>임정아</h3>
            <RightArrow src="/RightArrow.png" alt="화살표" />
          </ProfileBox>
        </SpaceBetween>

        <Menu>
          <MenuText>공지사항</MenuText>
          <MenuText>이벤트</MenuText>
          <SelectedText>FAQ</SelectedText>
          <MenuText>Q&A</MenuText>
        </Menu>
      </MediumBox>
      <HrLine />

      <MediumBox>
        <QuestionForm>
          <QuestionTextBox>
            <QuestionNumber>Q.01</QuestionNumber>
            <QuestionText>리뷰 작성은 어떻게 하나요?</QuestionText>
          </QuestionTextBox>
          <SearchIcon src="/BottomArrow.png" alt="Arrow" />
        </QuestionForm>

        <QuestionForm>
          <QuestionTextBox>
            <QuestionNumber>Q.02</QuestionNumber>
            <QuestionText>리뷰 수정/삭제는 어떻게 하나요?</QuestionText>
          </QuestionTextBox>
          <SearchIcon src="/BottomArrow.png" alt="Arrow" />
        </QuestionForm>

        <QuestionForm>
          <QuestionTextBox>
            <QuestionNumber>Q. 03</QuestionNumber>
            <QuestionText>아이디 비밀번호를 잊어버렸어요.</QuestionText>
          </QuestionTextBox>
          <SearchIcon src="/BottomArrow.png" alt="Arrow" />
        </QuestionForm>

        <QuestionForm>
          <QuestionTextBox>
            <QuestionNumber>Q. 04</QuestionNumber>
            <QuestionText>회원탈퇴를 하고싶어요.</QuestionText>
          </QuestionTextBox>
          <SearchIcon src="/BottomArrow.png" alt="Arrow" />
        </QuestionForm>

        <QuestionForm>
          <QuestionTextBox>
            <QuestionNumber>Q. 05</QuestionNumber>
            <QuestionText>출발지 설정은 어떻게 하나요?</QuestionText>
          </QuestionTextBox>
          <SearchIcon src="/BottomArrow.png" alt="Arrow" />
        </QuestionForm>

        <QuestionForm>
          <QuestionTextBox>
            <QuestionNumber>Q. 06</QuestionNumber>
            <QuestionText>비밀번호를 변경하고 싶어요.</QuestionText>
          </QuestionTextBox>
          <SearchIcon src="/BottomArrow.png" alt="Arrow" />
        </QuestionForm>
      </MediumBox>

      <BottomMenu>
        <BottomMenuFlexBox>
          <img src="/Home.png" alt="홈" />
          <BottomMenuText>홈</BottomMenuText>
        </BottomMenuFlexBox>

        <BottomMenuFlexBox>
          <img src="/Location.png" alt="홈" />
          <BottomMenuText>잇츠로드</BottomMenuText>
        </BottomMenuFlexBox>

        <BottomMenuFlexBox>
          <img src="/Heart.png" alt="홈" />
          <BottomMenuText>마이찜</BottomMenuText>
        </BottomMenuFlexBox>

        <BottomMenuFlexBox>
          <img src="/User.png" alt="홈" />
          <BottomMenuSelectedText>마이</BottomMenuSelectedText>
        </BottomMenuFlexBox>
      </BottomMenu>
    </BigBox>
  );
}
