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

  const removeProfile = idNumber => {
    updateProfiles(
      profiles.filter(profile =>
        profile.profile_id === idNumber ? null : profile
      )
    );
  };
  console.log(profiles);
  return (
    <>
      <PageTitle />
      <Form add={addNewProfile} profilesLength={profiles.length} />
      <ProfilesContainer>
        {profiles.length > 0
          ? profiles.map((profile, id) => {
              id++;
              profile.profile_id = id;
              return (
                <Profile
                  {...profile}
                  key={id}
                  profileNumber={id}
                  remove={removeProfile}
                />
              );
            }, 0)
          : ''}
      </ProfilesContainer>
    </>
  );
};

export default App;
