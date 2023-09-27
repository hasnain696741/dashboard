// src/Dashboard.js
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import React from 'react';

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    navigate(`/signin`)
    
  }
  const htmlQuiz = () => {
    
  }

  return (
    <>
      {/* <h1>Quizz App Admin</h1> */}
      <div className='main-div'>
        <Avatar  />
        <button onClick={htmlQuiz}>HTML</button>
        <button>CSS</button>
        <button>JS Quizz 1</button>
        <button>JS Quizz 2</button>
      <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default Dashboard;

