import React from 'react';
import AppBar from 'material-ui/AppBar';

import './TitleBar.scss'

const TitleBar = () => (
  <AppBar
    title="Chuck Norris Jokes"
    showMenuIconButton={false}
    zDepth={200}
  />
);

export default TitleBar;