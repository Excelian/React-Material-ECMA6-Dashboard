import Reflux from 'reflux';
import actions from '../Actions';
import React from 'react';
import $ from 'jquery';

var {AsyncStorage} = React;

const USERKEY = "userList";

var userStore = Reflux.createStore({
  init(){
    "use strict";
    this.listenTo(actions.UserList, this.onUserList)
    this.loadUserList();
    this.users = [];
    this.emit();
  },

  emit(){
    "use strict";

  },

  async _loadUserList(){
    "use strict";
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.users.push(data);
        this.emit();
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  async _writeUserList(){
    "use strict";
    try {
      await AsyncStorage.setItem(USERKEY, JSON.stringify(this.users));
    }
    catch (error) {
      console.error("Error writing to async Storage");
    }
  },


  onUserList(data)
  {
    //doSomething
  }


});

export default userStore;
