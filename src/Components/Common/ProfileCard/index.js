import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Exit from '../../../assets/close.png';

const ProfileCard = styled.div`
  background: lightgray;
  border: solid black 1px;
  width: 27em;
  padding: 1em;
  text-align: center;
`;

const ExitContainer = styled.div`
  text-align: right;
`;

const ExitButton = styled.img`
  cursor: pointer;
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
  margin: 1.5em 0;
`;

const ProfileImg = styled.img`
  max-width: 10em;
  border: solid grey 2px;
`;

const StyledUl = styled.ul`
  text-align: left;
  width: 10em;
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 0.5em;
`;

const AnchorTag = styled.a`
  text-decoration: none;
  color: black;
`;

const Profile = ({
  login,
  avatar_url,
  id,
  name,
  followers,
  html_url,
  profileNumber,
  remove
}) => {
  const handleClose = () => {
    remove(profileNumber);
  };

  return (
    <ProfileCard>
      <ExitContainer>
        <ExitButton src={Exit} onClick={handleClose} title="Close" />
      </ExitContainer>
      <Title title={`${name}'s github profile`}>
        <AnchorTag href={html_url}>{login}</AnchorTag>
      </Title>
      <ProfileInfo>
        <ProfileImg src={avatar_url} alt={name} title={name} />
        <StyledUl>
          <StyledLi>ID: {id}</StyledLi>
          <StyledLi>Name: {name}</StyledLi>
          <StyledLi>Followers: {followers}</StyledLi>
        </StyledUl>
      </ProfileInfo>
      <AnchorTag href={html_url} target="_blank">
        <Button label="Check Profile" />
      </AnchorTag>
    </ProfileCard>
  );
};

export default Profile;
