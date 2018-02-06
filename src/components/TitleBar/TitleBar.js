import React from 'react';
import AppBar from 'material-ui/AppBar';

import './TitleBar.scss'

const TitleBar = () => (
  <AppBar
    title="Chuck Norris Jokes"
    showMenuIconButton={false}
  />
);

export default TitleBar;