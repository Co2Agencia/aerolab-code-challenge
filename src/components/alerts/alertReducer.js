/* 
    Payload example:
    {
        id: "ya54ea9ea428920817f97", // ID of the alert
        text: "This is a test" , // Content of the alert
        type: "success" // The type of the alert. There are 3 types --> [ "success", "error", "products" ]
    }
*/
export const alertReducer = ( state = [], action ) => {

    switch ( action?.type ) {

        case "add":
            return [ ...state, action.payload ];

        case "delete":
            return state.filter( alert => alert.id !== action.payload );

        default:
            return state;

    }

}