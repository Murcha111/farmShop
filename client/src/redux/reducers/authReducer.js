export function authReducer(state = {}, action) {
  // console.log("state", state);
  // console.log(action.payload);
  switch (action.type) {
    case "REG_AUTH":
      return { ...action.payload };

    case "LOG_AUTH":
      return { ...action.payload };

    case "CHECK_AUTH":
      return {  ...action.payload };

    case "LOG_OUT":
      return {};

    default:
      return state;
  }
}
