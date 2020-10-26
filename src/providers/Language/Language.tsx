import React from "react";

import { useSelector } from "react-redux";
import { isoCodeSelector, messagesSelector } from "@selectors/";

export const LangContext = React.createContext({
  isoCode: "",
  messages: {},
});

export const LangProvider = (props) => {
  const provider = {
    isoCode: useSelector(isoCodeSelector),
    messages: useSelector(messagesSelector),
  };

  return (
    <LangContext.Provider value={provider}>
      {props.children}
    </LangContext.Provider>
  );
};
