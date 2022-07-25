import { failData, getData, getSuccess } from "../Variable/variable";

const initialState = {
  isloadding: false,
  error: null,
  toDos: [],
};
const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case getData:
      return {
        ...state,
        isloadding: true,
      };
    case getSuccess:
      return {
        toDos:action.payload,
        isloadding: false,
        error:null
      };
    case failData:
      return {
        error:action.payload,
        isloadding: false,
        toDos:[]
      };

    default:
      return state;
  }
};
export default toDosReducer;
