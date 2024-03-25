import * as React from 'react';
import './PublicPageCss/Button.css'; // Import the CSS file for button styles

export default function CustomButton({ onClick, children }) {
  return (
    <button className='custom-button' onClick={onClick}>
      {children}
    </button>
  );
}
