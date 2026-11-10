import {createContext,useContext,useState} from 'react';
const Ctx=createContext();
// Demo-only auth + in-memory requests (same behaviour as the original). Replace with a real backend later.
export function StoreProvider({children}){
  const [role,setRole]=useState(null);const [requests,setRequests]=useState([]);
  return <Ctx.Provider value={{role,setRole,requests,addRequest:r=>setRequests(x=>[...x,r])}}>{children}</Ctx.Provider>;
}
export const useStore=()=>useContext(Ctx);
