import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 20px;
`;

const ControlsBtn = styled.button`
  width: 200px;
  height: 60px;

  background-color: #332b00;
  border-radius: 16px;
  outline: none;
  border: 2px solid#f2ab26;
  color: #f2ab26;

  font-size: 20px;

  cursor: pointer;
  transition: 300ms;

  :hover {
    ${props => {
      if (props.status === 'good') {
        return 'border-color: #00f90f; color: #00f90f;';
      } else if (props.status === 'bad') {
        return 'border-color: #c81a00; color: #c81a00;';
      }
      return 'border-color: white; color: white;';
    }}
  }
`;

export { Container, ControlsBtn };
