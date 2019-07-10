import React from 'react';
import styled from 'styled-components';

import Exit from '../../../assets/close.png';

const ProfileCard = styled.div`
  background: lightgray;
  border: solid black 1px;
  // max-width: 27em;
  padding: 1em;
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
`;

const ProfileImg = styled.img`
  max-width: 10em;
  border: solid grey 2px;
`;

const StyledUl = styled.ul`
  width: 10em;
`;

const Li = styled.li`
  list-style: none;
  padding: 0.5em;
`;

const Profile = ({ login, avatar_url, id, name, followers, html_url }) => {
  const [toClose, setToClose] = React.useState(false);

  const handleClose = () => {
    setToClose(true);
  };

  if (!toClose) {
    return (
      <ProfileCard>
        <ExitContainer>
          <ExitButton src={Exit} onClick={handleClose} title="Close" />
        </ExitContainer>
        <Title>{login}</Title>
        <ProfileInfo>
          <ProfileImg src={avatar_url} alt={name} />
          <StyledUl>
            <Li>ID: {id}</Li>
            <Li>Name: {name}</Li>
            <Li>Followers: {followers}</Li>
          </StyledUl>
        </ProfileInfo>
      </ProfileCard>
    );
  } else return '';
};

export default Profile;
