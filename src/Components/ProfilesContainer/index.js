import React from 'react';
import styled from 'styled-components';

import Profile from '../Common/ProfileCard';

const ProfilesContainer = styled.div`
  // margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-flow: <‘flex-direction’>;
  justify-content: center;
`;

const ProfileHolder = ({ profiles, remove }) => {
  //   const [toClose, setToClose] = React.useState(false);

  React.useEffect(() => {
    console.log('this is useeffect from profile holder ', profiles.length);
  }, [profiles]);

  return (
    <ProfilesContainer>
      {profiles.length > 0
        ? profiles.map(profile => {
            return (
              <Profile
                {...profile}
                key={profile.profile_id}
                profileNumber={profile.profile_id}
                remove={remove}
                // setToClose={setToClose}
              />
            );
          }, 0)
        : ''}
    </ProfilesContainer>
  );
};

export default ProfileHolder;
