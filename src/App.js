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
  const [profiles, updateProfiles] = React.useState([]);
  console.log('logging before anything', profiles);
  const addNewProfile = profileData => {
    updateProfiles([...profiles, profileData]);
  };
  return (
    <>
      <PageTitle />
      <FormContainer add={addNewProfile} />
      <ProfilesContainer>
        {/* map through array of github profiles and render Profile component with prop */}

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
