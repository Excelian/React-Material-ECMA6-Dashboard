import AppBar from 'material-ui/lib/app-bar';
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import IconButton from 'material-ui/lib/icon-button';
import s from './Header.scss';

class Header extends Component{

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <AppBar title="Settings"
                  iconElementLeft={<IconButton></IconButton>}/>
        </div>
      </div>
    );

  }

}


export default withStyles(Header, s);
