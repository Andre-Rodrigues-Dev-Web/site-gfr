import React from 'react';
import { ComponentButton } from './style';

ComponentButton.defaultProps = {
    size: '10px 20px',
    backgroundColor: 'blue',
    color: 'white'
};

const Button = ({ children, onClick, size, backgroundColor, color }) => (
  <ComponentButton onClick={onClick} size={size} backgroundColor={backgroundColor} color={color}>
    {children}
  </ComponentButton>
);

export default Button;