import { authUser } from "./authReducer";

const INITIALISED_SUCCESS = "INITIALISED_SUCCESS";

let initialState = {
  initialised: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialised: true,
      };
    default:
      return state;
  }
};

export const initialisedSuccess = () => ({
  type: INITIALISED_SUCCESS,
});

//redux-thunk

export const initialiseApp = () => (dispatch) => {
  let promise = dispatch(authUser());
  promise.then(() => {
    dispatch(initialisedSuccess());
  });
};

export default appReducer;
