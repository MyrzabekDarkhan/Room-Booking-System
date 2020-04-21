const initialState = {
    meetingsData: []
}

export default function(state= initialState, action) {
    // console.log(action.payload.posts)
    switch(action.type) {
        case 'SET_MEETINGS': 
        
            return {
                ...state,
                meetingsData: action.payload,
            }

        case 'RESET_MEETINGS':

            return{
                ...state,
                meetingsData: [],
            }


        // case 'ADD_MEETINGS':

        //     // return [
        //     //     ...state,
        //     //     {
        //     //         id : action.payload.id,
        //     //         title:action.payload.title,
        //     //         body: action.payload.body
        //     //     }
        //     // ]
        //     return {
        //         ...state,
        //         roomsData: [...state.roomsData, action.payload]
        //     }
            
        default:
            return state;
    }
}