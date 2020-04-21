export const setUsers = users => {
    return {
        type: 'SET_USERS',
        payload: users,
    }
}
export const addUsers = users => {
   // console.log(users);
    return {
        type: 'ADD_USERS',
        payload: users
    }
}