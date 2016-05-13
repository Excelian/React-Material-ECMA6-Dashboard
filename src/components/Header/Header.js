import AppBar from 'material-ui/AppBar';
import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import s from './Header.scss';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AppBar title="Settings"
                    iconElementLeft={<IconButton></IconButton>}/>
          </MuiThemeProvider>
        </div>
      </div>
    );

  }

}


export default withStyles(Header, s);
