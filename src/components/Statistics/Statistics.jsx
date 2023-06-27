import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
