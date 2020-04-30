import { REGISTER_SESSION, DEREGISTER_SESSION } from "../actions/types";

const initialState = {
  sessionId: "",
  permission: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_SESSION:
      return {
        ...state,
        sessionId: payload.sessionId,
        permission: payload.permission,
      };
    case DEREGISTER_SESSION:
      return {
        ...state,
        sessionId: "",
        permission: "",
      };
    default:
      return state;
  }
};
