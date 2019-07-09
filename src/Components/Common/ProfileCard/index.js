import React from 'react';
import styled from 'styled-components';

import Exit from '../../../assets/close.png';

const ProfileCard = styled.div`
  background: yellow;
  border: solid black 1px;
  padding: 1em;
`;

const ExitContainer = styled.div`
  text-align: right;
`;

const Title = styled.h2`
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 0.5em;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-width: 25em;
  padding: 0.75em;
`;

const ProfileImg = styled.img`
  max-width: 10em;
  border: solid grey 2px;
`;

const StyledUl = styled.ul``;

const Li = styled.li`
  list-style: none;
  padding: 0.5em;
`;

const Profile = ({ login, avatar_url, name, followers }) => {
  return (
    <ProfileCard>
      <ExitContainer>
        <img src={Exit} />
      </ExitContainer>
      <Title>{login}</Title>
      <ProfileInfo>
        <ProfileImg src={avatar_url} />
        <StyledUl>
          <Li>Name: {name}</Li>
          <Li>Followers: {followers}</Li>
        </StyledUl>
      </ProfileInfo>
    </ProfileCard>
  );
};

export default Profile;
