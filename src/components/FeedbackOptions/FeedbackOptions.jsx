import { Container, ControlsBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClick }) => (
  <Container>
    {options.map(option => {
      const name = option.charAt(0).toUpperCase() + option.slice(1);

      return (
        <ControlsBtn
          key={option}
          type="button"
          onClick={() => {
            onClick(option);
          }}
          status={option}
        >
          {name}
        </ControlsBtn>
      );
    })}
  </Container>
);

export default FeedbackOptions;
