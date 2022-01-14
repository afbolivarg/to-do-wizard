import React from 'react';
import '../styles/TodoWizardHeader.css'

function TodoWizardHeader() {
  return (
    <div className='header'>
      <img
        className='logo'
        src='https://img.icons8.com/glyph-neue/64/39A6A3/fantasy.png'
        alt='Logo'
      />
      <h1 className='title'>ToDo Wizard</h1>
    </div>
  );
}

export { TodoWizardHeader };