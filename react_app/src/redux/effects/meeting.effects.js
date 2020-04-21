import { setMeetings } from '../actions/meeting.actions';

export function getMeetings(id) {
  return function (dispatch, getState) {
    return fetch('http://localhost:3000/meetings/' + id + '/meetings')
      .then((res) => res.json())
      .then((meetings) => {
        if (!meetings || !meetings.length) {
          dispatch(setMeetings(null));
          return;
        }
        console.log(meetings);

        dispatch(setMeetings(meetings));
      });
  };
}
