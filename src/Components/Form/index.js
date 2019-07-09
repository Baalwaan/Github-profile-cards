import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: yellow;
  max-width: 27em;
  margin: auto;
  padding: 1em;
`;

const Input = styled.input`
  padding: 5px;
  border: dashed black 2px;
  min-height: 2em;
  font-size: 1.5em;
  margin-bottom: 1em;
  width: 80%;
`;

const Button = styled.button`
  min-width: 5em;
  font-size: 1.5em;
  padding: 5px;
  outline: none;
  background: black;
  color: white;
`;
const FormContainer = () => {
  return (
    <StyledForm>
      <Input placeholder="Github Username here..." />
      <Button>Click Me!!!</Button>
    </StyledForm>
  );
};

export default FormContainer;
