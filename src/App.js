import React from 'react';

import Form from './Components/Form';
import PageTitle from './Components/PageTitle';
import ProfilesHolder from './Components/ProfilesContainer';

const App = () => {
  const [profiles, updateProfiles] = React.useState([]);

  // function will concat new profile object from fetch in formContainer
  const addNewProfile = newProfile => {
    // if (profiles.length == 0) {
    //   updateProfiles([...profiles, newProfile]);
    // }
    // updateProfiles(
    //   profiles.filter(profile =>
    //     profile.profile_id === newProfile.profile_id ? null : profile
    //   )
    // );
    updateProfiles([...profiles, newProfile]);
  };

  const removeProfile = idNumber => {
    updateProfiles(
      profiles.filter(profile =>
        profile.profile_id !== idNumber ? profile : null
      )
    );
  };
  // console.log(profiles);
  return (
    <>
      <PageTitle />
      <Form add={addNewProfile} profiles={profiles} />
      <ProfilesHolder profiles={profiles} remove={removeProfile} />
    </>
  );
};

export default App;
