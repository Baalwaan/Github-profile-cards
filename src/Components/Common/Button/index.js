import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 5em;
  font-size: 1.5em;
  padding: 5px;
  outline: none;
  background: black;
  color: white;
  :active {
    transform: scale(0.9);
  }
`;

const Button = ({ label }) => <StyledButton>{label}</StyledButton>;

export default Button;
