import { setUsers } from '../actions/user.actions';

export function getUsers() {
  return function (dispatch, getState) {
    return fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((users) => {
        if (!users || !users.length) {
          dispatch(setUsers(null));
          return;
        }
        console.log(users);

        dispatch(setUsers(users));
      });
  };
}
