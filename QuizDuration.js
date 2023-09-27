// QuizDuration.js
import React, { useState } from 'react';

const QuizDuration = ({ onDurationChange }) => {
  const [duration, setDuration] = useState('');

  const handleDurationChange = (e) => {
    const newDuration = e.target.value;
    setDuration(newDuration);
    onDurationChange(newDuration);
  };

  return (
    <input
      type="text"
      placeholder="Quizz Duration"
      name=""
      id=""
      value={duration}
      onChange={handleDurationChange}
    />
  );
};

export default QuizDuration;
