import { dictionary, DEFAULT_LANG } from "@providers/Language";

export const SET_LANG = "SET_LANG";

export const setLang = (iso?: string, other?: boolean) => (dispatch) => {
  const _iso = other
    ? Object.keys(dictionary).filter((k) => k !== iso)[0]
    : iso || DEFAULT_LANG;

  return dispatch({
    type: SET_LANG,
    payload: {
      isoCode: _iso,
      messages: dictionary[_iso],
    },
  });
};
