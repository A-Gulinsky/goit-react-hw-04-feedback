import PropTypes from 'prop-types'

import { Ul,Span } from './Statistics.styled'

export const Statistics = ({useStates,total}) => {

  const { good, bad, neutral } = useStates;
  
  const positivePercentage =  Math.ceil((good/total) * 100)

  return (
    <Ul>
      <li >
        <p>Good: <Span>{good}</Span></p>
      </li>
      <li >
        <p>Bad: <Span>{bad}</Span></p>
      </li>
      <li >
        <p>Neutral: <Span>{neutral}</Span></p>
      </li>
      <li >
        <p>Total: <Span>{total}</Span></p>
      </li>
      <li >
        <p>Positive Percentage: <Span>{positivePercentage}</Span>%</p>
      </li>
    </Ul>
  )
}

Statistics.propTypes = {

  useStates: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
};