import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const FeedbackWidget = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const feedbackTypes = Object.keys({ good, neutral, bad });

  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    </div>
  );
};

export default FeedbackWidget;
