import styled from "@emotion/styled";

export const BigBox = styled.div`
  width: 640px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const MediumBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
`;

export const SearchIcon = styled.img`
  width: 23px;
  height: 23px;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px 0px 0px 0px;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

export const ProfileImage = styled.img`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export const RightArrow = styled.img`
  width: 16.97px;
  height: 16.97px;
`;

export const Menu = styled.div`
  padding-top: 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const MenuText = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #cacaca;
  cursor: pointer;
`;

export const SelectedText = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-position: under;
  color: #ff1b6d;
  cursor: pointer;
`;

export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid #cacaca;
`;

export const QuestionForm = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const QuestionNumber = styled.span`
  color: #adadad;
  font-size: 18px;
`;

export const QuestionText = styled.span`
  color: black;
  font-size: 24px;
`;

export const BottomMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 96px;
  border-top: 1px solid #dcdcdc;
`;

export const BottomMenuFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const BottomMenuText = styled.span`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #adadad;
`;

export const BottomMenuSelectedText = styled.span`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #ff1b6d;
`;
