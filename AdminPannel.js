import React, { useState } from 'react';
import Dashboard from './Dashboard';
import QuizDuration from './QuizDuration';
import SecretKeyAndDescription from './SecretKeyAndDescription';
import { getDatabase, ref, set } from 'firebase/database';
import Question from './Question';
import './Style.css';

const db = getDatabase();


const AdminPannel = () => {
  const [quizDuration, setQuizDuration] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [description, setDescription] = useState('');

  const handleDurationChange = (newDuration) => {
    setQuizDuration(newDuration);
  };

  const handleSecretKeyChange = (newSecretKey) => {
    setSecretKey(newSecretKey);
  };

  const handleDescriptionChange = (newDescription) => {
    setDescription(newDescription);
  };

  const handleLockQuiz = () => {
set(ref(db, 'quiz/test'), {
  Quizduration: quizDuration,
  Secretkey: secretKey,
  Description: description,
}).then((res) => {
  alert('secces')
})
  };

  return (
    <>
      <Dashboard />
      <div className='admin'>
      <br />
      <h2>Admin Panel</h2> <br /> <br />
        <button id='save'>Save</button>   <br /> <br />
        <QuizDuration onDurationChange={handleDurationChange} />
        <input type="text" placeholder='Quizz Duration in min' name="" id="" /> <br /> <br />
        <SecretKeyAndDescription onSecretKeyChange={handleSecretKeyChange} onDescriptionChange={handleDescriptionChange} /> <br /> <br />
        <button id='lock' onClick={handleLockQuiz}>Lock Quizz</button>
        <br />
        <br />
        <br />
        <Question />
      </div>
    </>
  );
}

export default AdminPannel;
