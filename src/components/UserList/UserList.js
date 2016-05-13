import React, {Component, PropTypes} from 'react';
import withStyles from '../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './UserList.scss';

import emitter from "../../Actions/Actions";


import Avatar from 'material-ui/Avatar';
import Card from 'material-ui/Card/Card';

import CardText from 'material-ui/Card/CardText';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Toggle from 'material-ui/Toggle';

import Header from '../Header/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import UserStore from '../../stores/UserStore';
import Actions from '../../Actions/Actions';
import {CHANGE_EVENT} from '../../Actions/Actions';

class UserList extends Component {

  unsubscribe = null;
  state = ({list:[], newUser:{title:"blah"}});
  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.addUserDetail = this.addUserDetail.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.render = this.render.bind(this);
    emitter.emit('loadUsers');
  }


  componentDidMount() {
    this.unsubscribe = UserStore.listen(()=> this.setState({data: UserStore.getData()}));

  }


  onStatusChange(status) {
    setState({list: status});
  }


  addUserDetail(event){
    try {
      var elementID = event.target.id;
      var elementValue = event.target.value;
      console.log("Setting "+elementID+"="+elementValue);

      this.setState({elementID : elementValue});
      // var stringOfSetState = 'this.setState({newUser.' + elementID + ' : \"' + elementValue + '\"});'
      // alert(stringOfSetState);
      // eval(stringOfSetState);
    }catch(error){
      alert(error);
    }
  }

  addUser() {

    console.log("Add User");
    Actions.emit(CHANGE_EVENT);

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


  render() {
    return (

      <MuiThemeProvider muiTheme={getMuiTheme()}>

        <div>
          <Header/>
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
            <CardText >
              <TextField id= 'titleInput' className={s.userInputText} floatingLabelText="Title"  onChange = {this.addUserDetail} value = {this.state.newUser.title}  />
              <TextField className={s.userInputText} onChange = {this.addUserDetail} floatingLabelText="Email"/>
              <TextField className={s.userInputText} onChange = {this.addUserDetail} floatingLabelText="First Name"/>
              <TextField className={s.userInputText} onChange = {this.addUserDetail} floatingLabelText="Last Name"/>
              <FloatingActionButton onClick={this.addUser} secondary={true}>
                <div>+</div>
              </FloatingActionButton>

            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>

    );


  }

  componentWillUnmount() {
    this.unsubscribe();
  }


}


export default withStyles(UserList, s);
