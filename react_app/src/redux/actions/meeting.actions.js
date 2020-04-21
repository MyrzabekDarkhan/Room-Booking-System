export const setMeetings = meetings => {
 
  return {
    type: 'SET_MEETINGS',
    payload: meetings,
  };
};
export const addMeeting = meetings => {
  console.log(meetings);
  return {
    type: 'ADD_MEETINGS',
    payload: meetings,
  };
};


export const resetMeetings = () => {
  
  return {
    type: 'RESET_MEETINGS',

  };
};
