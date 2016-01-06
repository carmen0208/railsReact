import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter"

// let _users = [{id: 1 , name: 'DHH'}, {id: 2 , name: 'jasd'}];
let _users=[];

class UserEventEmitter extends AppEventEmitter {

  getAll() {
    return _users;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  // action.actionType === REVEIVED_TWEETS
  switch(action.actionType){
    case ActionTypes.RECEIVED_USERS:
      console.log(4, "UserStore");
      // acknowledge tweets;
      _users = action.rawUsers;
      // emit a change event;
      UserStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_USERS:
      _users.unshift(action.rawUser);
      UserStore.emitChange();
    default:
    //on op
  }
});

export default UserStore;
