import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Number of good feedbacks: {good}</p>
      <p>Number of neutral feedbacks: {neutral}</p>
      <p>Number of bad feedbacks: {bad}</p>
      <p>Total feedbacks: {total}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
