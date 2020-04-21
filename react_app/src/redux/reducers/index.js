import { combineReducers } from "redux";
import roomReducer from './room.reducers'
import meetingReducer from './meeting.reducers';


const appReducers = combineReducers({
    rooms: roomReducer,
    meetings: meetingReducer,
});

export default appReducers;