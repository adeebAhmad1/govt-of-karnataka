import React, { createContext, useContext, useEffect, useState } from 'react';
import Languages from "./Languages"
const LanguageContext = createContext();

export const useLanguage = ()=> useContext(LanguageContext)

const LanguageContextProvider = ({children}) => {
  const [language,setLanguage] = useState("en");
  useEffect(()=>setLanguage(lan=> localStorage.getItem("language") || lan ),[])
  const [languageType,setLanguageType] = useState(Languages[language]);
  useEffect(()=>{
    setLanguageType(Languages[language]);
    localStorage.setItem("language",language);
  },[language])
  return (
    <LanguageContext.Provider value={{language,setLanguage,languageType}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;