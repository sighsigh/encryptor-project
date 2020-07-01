import * as React from 'react';

import { labels, languageOptions } from './dictionary';

export const LanguageContext = React.createContext({
  language: languageOptions[0],
  dictionary: labels[languageOptions[0].id]
});

export function LanguageProvider(props) {
  const languageContext = React.useContext(LanguageContext);
  const [language, setCurrentLanguage] = React.useState(languageContext.language);
  const [dictionary, setDictionary] = React.useState(languageContext.dictionary);

  const provider = {
      language,
      dictionary,
      setLanguage: (selectedLanguage) => {
        setCurrentLanguage(selectedLanguage);
        setDictionary(labels[selectedLanguage.id]);
      }
  };

  return (
      <LanguageContext.Provider value={provider}>
          {props.children}
      </LanguageContext.Provider>
  )
};


interface LabelProps {
    name: string
}
export const Label = (props: LabelProps) => {
  const languageContext = React.useContext(LanguageContext);

  return languageContext.dictionary[props.name];
};