import { REGISTER_SESSION, DEREGISTER_SESSION } from "../actions/types";
import store from "../../store";

export const registerSession = (sessionId, permission) => {
  const payload = {
    sessionId: sessionId,
    permission: permission,
  };
  store.dispatch({ type: REGISTER_SESSION, payload: payload });
};

export const deregisterSession = () => {
  store.dispatch({ type: DEREGISTER_SESSION });
};
