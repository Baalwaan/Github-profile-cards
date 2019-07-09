import React from 'react';
import styled from 'styled-components';

import FormContainer from './Components/Form';
import PageTitle from './Components/PageTitle';
import Profile from './Components/Common/ProfileCard';

const ProfilesContainer = styled.div`
  // margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-flow: <‘flex-direction’>;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <PageTitle />
      <FormContainer />
      <ProfilesContainer>
        {/* map through array of github profiles and render Profile component with prop */}
        <Profile />
      </ProfilesContainer>
    </>
  );
};

export default App;
