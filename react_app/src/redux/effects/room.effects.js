import { setRooms } from '../actions/room.actions';

export function getRooms() {
  return function (dispatch, getState) {
    return fetch('http://localhost:3000/rooms')
      .then((res) => res.json())
      .then((rooms) => {
        if (!rooms || !rooms.length) {
          dispatch(setRooms(null));
          return;
        }
        // console.log(rooms);

        dispatch(setRooms(rooms));
      });
  };
}
