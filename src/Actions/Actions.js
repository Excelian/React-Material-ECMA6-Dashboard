import {EventEmitter} from 'fbemitter';

export const CHANGE_EVENT = 'change';
export const ADD_USER_EVENT = 'addUser';
const emitter = new EventEmitter();
var changeHandler = function () {
  console.log("change event triggered");
};

emitter.addListener(CHANGE_EVENT,changeHandler);


export default emitter ;
