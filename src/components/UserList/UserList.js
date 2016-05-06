import React, {Component, PropTypes} from 'react';
import withStyles from '../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './UserList.scss';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';

import CardText from 'material-ui/lib/card/card-text';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

import Toggle from 'material-ui/lib/toggle';
import UserStore from '../../stores/UserStore.js';


class UserList extends Component {


  getInitialState() {
    return {
      list: []
    };
  }

  onStatusChange(status) {
    setState({list:status});
  }


  addUser() {
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function (data) {
    //     allUsers.push(data);
    //     this.setState({list: allUsers});
    //   }.bind(this),
    //   error: function (xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  }


  componentDidMount() {
    this.unsubscribe = UserStore.listen(this.onStatusChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Card className={s.settingCardContainer}>
          <Toolbar>
            <ToolbarTitle text="Current Users"/>

            <CardText>
              <div>
                {
                  this.state.list.map(function (usr) {
                    return <div >
                      <Card >
                        <div >
                          {<Avatar
                            src={usr.results[0].user.picture.medium}/>}
                        </div>
                        <div
                          className={s.cardUserName}>
                          <h3 style={{textTransform: 'uppercase'}}>{usr.results[0].user.name.first}</h3>
                        </div>
                        <div
                          className={s.toggleContainer}>
                          <Toggle
                            label="Disabled"
                            labelPosition="right"
                            style={s.toggle}/>
                        </div>
                      </Card>

                    </div>
                  })
                }


              </div>
            </CardText>
          </Toolbar>

        </Card>

        <Card>
          <Toolbar>
            <ToolbarTitle text="Add User"/>
          </Toolbar>
          <CardText>
            <TextField className={s.userInputText} floatingLabelText="Title"/>
            <TextField className={s.userInputText} floatingLabelText="Email"/>
            <TextField className={s.userInputText} floatingLabelText="First Name"/>
            <TextField className={s.userInputText} floatingLabelText="Last Name"/>
            <FloatingActionButton onClick={this.addUser} secondary={true}>
              <div>+</div>
            </FloatingActionButton>

          </CardText>
        </Card>
      </div>);


  }

}


export default withStyles(UserList, s);
