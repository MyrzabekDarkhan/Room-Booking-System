const initialState = {
  usersData: [],
};

export default function (state = initialState, action) {
  // console.log(action.payload.posts)
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        usersData: action.payload,
      };

    default:
      return state;
  }
}
