import styled from 'styled-components';

const Container = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-weight:bold;
  margin-top : 5vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #C773F0;
`;

const Section = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoItem = styled.div`
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const IconList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const IconItem = styled.div`
  text-align: center;
`;

const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

const Mypage = () => {
  return (
    <Container>
      <Title>My Page</Title>

      <Section>
        <SectionTitle>기본정보</SectionTitle>
        <InfoRow>
          <InfoItem>이름</InfoItem>
          <InfoItem>OOO</InfoItem>
        </InfoRow>
        <InfoRow>
          <InfoItem>성별</InfoItem>
          <InfoItem>O</InfoItem>
        </InfoRow>
        <InfoRow>
          <InfoItem>생년월일</InfoItem>
          <InfoItem>-</InfoItem>
        </InfoRow>
 
        <Button>수정</Button>
      </Section>

      <Section>
        <InfoRow>
          <InfoItem>구매기록</InfoItem>
          <InfoItem>0건</InfoItem>
        </InfoRow>
        <InfoRow>
          <InfoItem>쿠폰</InfoItem>
          <InfoItem>0개</InfoItem>
        </InfoRow>
      </Section>

      <Section>
        <SectionTitle>이용안내</SectionTitle>
        <IconList>
          <IconItem>
            <Icon>📖</Icon>
            <div>서비스 이용약관</div>
          </IconItem>
          <IconItem>
            <Icon>💰</Icon>
            <div>유료서비스 이용약관</div>
          </IconItem>
          <IconItem>
            <Icon>🔒</Icon>
            <div>개인정보 처리방침</div>
          </IconItem>
        </IconList>
      </Section>

      <Section>
        <SectionTitle>앱 설정</SectionTitle>
        <IconList>
          <IconItem>
            <Icon>🔓</Icon>
            <div>로그아웃</div>
          </IconItem>
          <IconItem>
            <Icon>🗑️</Icon>
            <div>회원탈퇴</div>
          </IconItem>
        </IconList>
      </Section>
    </Container>
  );
};

export default Mypage;