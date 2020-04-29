import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Fab = styled.div`
  postion: absolute;
  height: 200px;
  position: fixed;
  display: inline-block;
  right: 40px;
  top: 300px;
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled.button`
  color: white;
  border: none;
  background: ${(props) => props.primary};
  color: 'white';
  padding: 12px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 20px;

  &:hover {
    background: ${(props) => props.clicked};
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;

const Action = styled.button`
  margin-bottom: 20px;
  width: 60px;
  heigt: 60px;

  background: ${(props) => props.primary};
  border-radius: 50%;

  padding: 18px;
  color: white;
  font-size: 16px;
  text-align: center;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;

  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
`;

const SmallActions = styled.div`
  display: flex;
  flex-direction: column;
  transition-property: property;
  transition-duration: 2s;
`;

export const ActionButton = ({
  icon,
  primary,
  clicked,
  action1,
  action2,
  action3,
}) => {
  const [showActions, setShowActions] = useState(false);
  return (
    <Fab>
      <StyledIcon
        onClick={() => setShowActions(!showActions)}
        primary={primary}
        clicked={clicked}
        className='mdc-icon-button material-icons'
      >
        {icon}
      </StyledIcon>
      {showActions && (
        <SmallActions>
          <Action
            primary={primary}
            show={showActions}
            className='mdc-icon-button material-icons'
          >
            {action3}
          </Action>
          <Action primary={primary} className='mdc-icon-button material-icons'>
            {action2}
          </Action>
          <Action primary={primary} className='mdc-icon-button material-icons'>
            {action1}
          </Action>
        </SmallActions>
      )}
    </Fab>
  );
};
