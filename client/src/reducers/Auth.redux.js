const LOGIN = "login";
const LOGOUT = "logout";
const REGISTER = "register";

export function authReducer(
  state = { isAuth: false, userName: "Amy" },
  action
) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    case REGISTER:
      return { ...state, isAuth: false };
    default:
      return state;
  }
}

export function loginAction() {
  return { type: LOGIN };
}

export function logoutAction() {
  return { type: LOGOUT };
}

export function registerAction() {
  return { type: REGISTER };
}
