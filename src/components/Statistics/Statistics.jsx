import { Container, Title, ValueName, Value } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <Container>
      <Title>Statistics</Title>

      <ValueName>
        Good: <Value>{good}</Value>
      </ValueName>

      <ValueName>
        Neutral: <Value>{neutral}</Value>
      </ValueName>

      <ValueName>
        Bad: <Value>{bad}</Value>
      </ValueName>

      <ValueName>
        Total: <Value>{total}</Value>
      </ValueName>

      <ValueName>
        Positive feedback: <Value>{positive ? positive : 0}%</Value>
      </ValueName>
    </Container>
  );
};

export default Statistics;
