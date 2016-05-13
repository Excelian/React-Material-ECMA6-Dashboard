import React from 'react';
import $ from 'jquery';
import emitter from '../Actions/Actions';
import {CHANGE_EVENT} from '../Actions/Actions';
import {ADD_USER_EVENT} from '../Actions/Actions';


const USERKEY = "userList";
let userList = [];

function addUsers(user) {
  userList.push(user);
  emitter.emit(CHANGE_EVENT);

  alert("Add Users called in UserStore");
}
var listener = emitter.addListener(ADD_USER_EVENT, addUsers);



let loadUsers = function () {
  console.log("trying to load users");
  try {
   return $.get({
      url: "https://randomuser.me/api/",
      dataType: 'json'

    }).promise();


  }
  catch
    (error) {
    console.log("Probably rendered server side...")
  }

}

// var users = distinct(loadUsers());
// let userStore = Rx.Observable.fromCallback(loadUsers);

// let response = userStore();
// response.subscribe(
//   function (next) {
//     console.log(next)
//   },
//   function (error) {
//     console.log(error)
//   },
//   function () {
//     console.log("complete")
//   }
// )


// emitter.addListener('loadUsers', (args)=>{
//   console.log("received event from view");
// }, )

//
// });


// async _writeUserList(){
//   "use strict";
//   try {
//     await AsyncStorage.setItem(USERKEY, JSON.stringify(this.users));
//   }
//   catch (error) {
//     console.error("Error writing to async Storage");
//   }
// },

//
// onUserList(data)
// {
//   //doSomething
// }


export default null;
