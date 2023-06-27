import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 600px;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 40px;
  color: #f2ab26;
`;

const ValueName = styled.p`
  font-size: 30px;
  color: #f2ab26;
`;

const Value = styled.span`
  color: #f2ab26;
`;

export { Container, Title, ValueName, Value };
