import React from 'react';
import styled from 'styled-components';

import Exit from '../../../assets/close.png';

const ProfileCard = styled.div`
  background: yellow;
  width: 25em;
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
  width: 100%;
  padding: 0.75em;
`;

const ProfileImg = styled.img`
  max-width: 10em;
  border: solid grey 2px;
`;

const styledUl = styled.ul``;

const Li = styled.li`
  list-style: none;
  padding: 0.5em;
`;

const Profile = props => {
  return (
    <ProfileCard>
      <ExitContainer>
        <img src={Exit} />
      </ExitContainer>
      <Title>Profile</Title>
      <ProfileInfo>
        <ProfileImg src="https://avatars3.githubusercontent.com/u/42354400?v=4" />
        <styledUl>
          <Li>Name: Burhan Baalwaan</Li>
          <Li>Name: FAC16 for life</Li>
          <Li>Name: react is kl</Li>
        </styledUl>
      </ProfileInfo>
    </ProfileCard>
  );
};

export default Profile;
