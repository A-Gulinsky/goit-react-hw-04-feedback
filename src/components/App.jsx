import React , {useState} from 'react'

import { Container } from './App/App.styled';
import { Section } from "./Section.jsx/Section";

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { OPTIONS } from './constans/constans';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = {
    good: () => setGood(prev => prev + 1),
    neutral: () => setNeutral(prev => prev + 1),
    bad: () => setBad(prev => prev + 1),
  }

  const leaveFeedback = e => {
    const currentState = e.target.name
    const handle = handleFeedback[currentState]

    if (handle) {
      handle()
    }
  }

  // total states number
  const total = good + bad + neutral

  // if total = 0 => hide , else show
  const showStatistic = <Statistics useStates={{good,neutral,bad}} total={total} />
  const hideStatistic = <Notification message="There is no feedback" />

  return (
    <Container>
        <Section title="Please leave feedback">

          <FeedbackOptions options={OPTIONS} onLeaveFeedback={leaveFeedback} />

          {total ? showStatistic : hideStatistic}

      </Section>
    </Container>
  )
}

export default App