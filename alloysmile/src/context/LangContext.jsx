import {createContext,useContext,useState,useEffect,useCallback} from 'react';import {tt} from '../lib/i18n.js';
const Ctx=createContext();
export function LangProvider({children}){
  const [lang,setLang]=useState(()=>{try{return localStorage.getItem('lang')||'en'}catch{return 'en'}});
  useEffect(()=>{try{localStorage.setItem('lang',lang)}catch{}document.documentElement.lang=lang},[lang]);
  const t=useCallback(s=>lang==='sw'?tt(s):s,[lang]);
  return <Ctx.Provider value={{lang,setLang,t}}>{children}</Ctx.Provider>;
}
export const useLang=()=>useContext(Ctx);
