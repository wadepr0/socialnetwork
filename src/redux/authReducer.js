import { stopSubmit } from "redux-form";
import { authMeAPI, authMeLogin, authMeLogout } from "../components/Api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

//redux-thunk

export const authUser = () => async (dispatch) => {
  let data = await authMeAPI();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authMeLogin(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(authUser());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  let data = authMeLogout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
