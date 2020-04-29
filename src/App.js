import React from 'react';
import styled from 'styled-components';

import { ActionButton } from 'ActionButton';
import { Backgroundtext } from 'Background';

export const App = () => {
  return (
    <main>
      <Backgroundtext />
      <ActionButton
        icon='add'
        primary='blue'
        clicked='lightblue'
        action1='cloud'
        action2='face'
        action3='pets'
      />
    </main>
  );
};
