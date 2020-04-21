import { combineReducers } from "redux";
import roomReducer from './room.reducers'
import meetingReducer from './meeting.reducers';
import userReducer from "./user.reducer";


const appReducers = combineReducers({
    rooms: roomReducer,
    meetings: meetingReducer,
    users: userReducer,
});

export default appReducers;