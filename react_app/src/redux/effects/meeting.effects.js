import { setMeetings } from '../actions/meeting.actions';

export function getMeetings(id) {
  return function(dispatch, getState) {
    console.log("started");
    return fetch('http://localhost:3000/meetings/' + id + '/meetings')
      .then(res => res.json())
      .then(meetings => {
          console.log('finished');
        if (!meetings || !meetings.length) {
          dispatch(setMeetings(null));
          return;
        }
        console.log(meetings);
        meetings = meetings.slice(0, 5);

        // console.log(meetings);

        dispatch(setMeetings(meetings));
      });
  };
}
