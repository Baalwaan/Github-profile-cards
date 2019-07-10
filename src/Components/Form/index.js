import React from 'react';
import styled from 'styled-components';

import Button from '../Common/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightgray;
  max-width: 27em;
  margin: 2em auto;
  padding: 1em;
  border: solid black 1px;
`;

const Input = styled.input`
  padding: 5px;
  border: dashed black 2px;
  min-height: 2em;
  font-size: 1.5em;
  margin-bottom: 1em;
  width: 80%;
`;

const Form = ({ add, profiles }) => {
  const [inputVal, setInputVal] = React.useState('');
  const [id, generateId] = React.useState(1);

  const handleSubmit = event => {
    console.log(profiles);
    event.preventDefault();
    if (profiles.length === 5) {
      return alert('max team reached');
    }
    fetch(`https://api.github.com/users/${inputVal}
    `)
      .then(response => response.json())
      .then(response => {
        if (response.message === 'Not Found') {
          alert('Could not find user!');
        } else {
          console.log('fetched this ,', response);
          // below line gives each object a unique id
          response.profile_id = id;
          generateId(id + 1);
          add(response);
        }
      })
      .catch(err => console.log(err));
    // reset input value
    setInputVal('');
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
      <Button label="Click here!!!" />
    </StyledForm>
  );
};

export default Form;
