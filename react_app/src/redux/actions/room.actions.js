export const setRooms = rooms => {
    return {
        type: 'SET_ROOMS',
        payload: rooms,
    }
}
export const addRooms = rooms => {
    console.log(rooms);
    return {
        type: 'ADD_ROOM',
        payload: rooms
    }
}
