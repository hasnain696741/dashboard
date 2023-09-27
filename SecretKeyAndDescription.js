// SecretKeyAndDescription.js
import React, { useState } from 'react';

const SecretKeyAndDescription = ({ onSecretKeyChange, onDescriptionChange }) => {
  const [secretKey, setSecretKey] = useState('');
  const [description, setDescription] = useState('');

  const handleSecretKeyChange = (e) => {
    const newSecretKey = e.target.value;
    setSecretKey(newSecretKey);
    onSecretKeyChange(newSecretKey);
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    onDescriptionChange(newDescription);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Secret Key"
        name=""
        id=""
        value={secretKey}
        onChange={handleSecretKeyChange}
      />
      <input
        type="text"
        placeholder="Description"
        name=""
        id=""
        value={description}
        onChange={handleDescriptionChange}
      />
    </>
  );
};

export default SecretKeyAndDescription;
