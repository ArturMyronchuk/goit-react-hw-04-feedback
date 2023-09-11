import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

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

  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <h1>Please leave your feedback</h1>
      <FeedbackOptions onLeaveFeedback={handleFeedback} />
      <h2>Statistics</h2>
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
    </div>
  );
};

export default FeedbackWidget;
