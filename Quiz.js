import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';

const Quiz = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dbRef = ref(getDatabase());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    get(child(dbRef, 'quiz/test'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setQuizData(data);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after data fetch
      });
  }, [dbRef]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="countdown-timer">
        <h2>Countdown Timer</h2>
        <div>Time Left: {formatTime(timeLeft)}</div>
      </div>

      {loading ? ( // Display a loading message while data is loading
        <div>Loading...</div>
      ) : (
        quizData && (
          <div className="quiz-content">
            <h3>Quiz Data</h3>
            <p>Quiz Name: {quizData.Question1}</p>
            {quizData.questions && quizData.questions.length > 0 ? (
              <p>Total Questions: {quizData.questions.length}</p>
            ) : (
              <ul>
                <li><input type="radio" name="option1" id="" />{quizData.Options}</li>
              </ul>
            )}
            {currentQuestionIndex < (quizData.questions?.length || 0) && (
              <div className="question">
                <h4>Question {currentQuestionIndex + 1}</h4>
                <p>{quizData.questions[currentQuestionIndex]?.text}</p>
                <div className="options">
                  {quizData.questions[currentQuestionIndex]?.options.map((option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`question_${currentQuestionIndex}`}
                        value={option}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {currentQuestionIndex < (quizData.questions?.length || 0) - 1 && (
                  <button onClick={handleNextQuestion}>Next Question</button>
                )}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
