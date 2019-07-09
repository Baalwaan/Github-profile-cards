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
const FormContainer = ({ add }) => {
  const [inputVal, setInputVal] = React.useState('');
  const [profile, setProfile] = React.useState(null);
  // console.log('this is ,', profiles);

  const handleSubmit = event => {
    console.log('checkoing if im changed ', inputVal);
    event.preventDefault();
    fetch(`https://api.github.com/users/${inputVal}
    `)
      .then(response => response.json())
      .then(response => setProfile(response))
      .then(response => add(profile))
      .catch(err => console.log(err));

    // setInputVal('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Github Username here..."
        value={inputVal}
        onChange={event => {
          setInputVal(event.target.value);
        }}
        required
      />
      <Button>Click Me!!!</Button>
    </StyledForm>
  );
};

export default FormContainer;
