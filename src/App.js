import React from 'react';
import styled from 'styled-components';

import Form from './Components/Form';
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
  const [profiles, updateProfiles] = React.useState([]);

  // function will concat new profile object from fetch in formContainer
  const addNewProfile = profileData => {
    updateProfiles([...profiles, profileData]);
  };
  return (
    <>
      <PageTitle />
      <Form add={addNewProfile} />
      <ProfilesContainer>
        {profiles.length > 0
          ? profiles.map((profile, id) => {
              console.log(
                'this is how long profile is ',
                profiles.length,
                profiles
              );
              id++;
              return <Profile {...profile} key={id} />;
            }, 0)
          : ''}
      </ProfilesContainer>
    </>
  );
};

export default App;
