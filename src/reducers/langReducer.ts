import { SET_LANG } from "@actions/langActions";

const initialState = {
  isoCode: "",
  messages: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LANG:
      return {
        ...state,
        isoCode: payload.isoCode,
        messages: payload.messages,
      };
    default:
      return state;
  }
};
