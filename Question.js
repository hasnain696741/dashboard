

import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import './Style.css';

const db = getDatabase();


const AdminPanel = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState([]);
  const [optionText, setOptionText] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addQuestion = () => {
    if (questionText.trim() === '') {
      return; // Do not add empty questions
    }
    setQuestions([...questions, questionText]);
    setQuestionText('');
    setOptions([]); // Clear the previous options when adding a new question
  };

  const addOption = () => {
    if (optionText.trim() === '') {
      return; // Do not add empty options
    }
    setOptions([...options, optionText]);
    setOptionText('');
  };

  const submitOptions = () => {
    // Save the selected options and clear the input
    setSelectedOptions([...selectedOptions, options]);
    setOptions([]);
    set(ref(db, 'quiz/test'), {
        Question1: questions,
        Options: options,
      })

  };

  return (
    <div >
{/* <h3>Enter Questions</h3> */}
      <div>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder='Enter Question'
          id='inp'
        />
        <button id='add' onClick={addQuestion}>Add Question</button>
      </div>

      <div>
        {questions.map((q, index) => (
          <div key={index}>
            <h3>Question {index + 1}:</h3>
            <p>{q}</p>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={optionText}
          onChange={(e) => setOptionText(e.target.value)}
          placeholder='Enter Option'
          id='inp'
        />
        <button id='add' onClick={addOption}>Add Option</button>
      </div>

      <div>
        {options.map((opt, index) => (
          <div key={index}>
            <p>Option {index + 1}: {opt}</p>
          </div>
        ))}
      </div>

      {options.length === 4 && (
        <div>
          <button onClick={submitOptions}>Submit</button>
        </div>
      )}

      <div>
        {/* <h3>Selected Options:</h3> */}
        {selectedOptions.map((selected, index) => (
          <div key={index}>
            {selected.map((opt, subIndex) => (
              <p key={subIndex}>Option {subIndex + 1}: {opt}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;

