import {useState} from 'react';import {Link,useLocation} from 'react-router-dom';
import {D} from '../data/site.js';import {useLang} from '../context/LangContext.jsx';
const LINKS=[['/','Home'],['/about','About'],['/cases','Cases'],['/insights','Insights'],['/services','Services']];
export default function Nav(){
  const {lang,setLang,t}=useLang();const {pathname:cur}=useLocation();const [open,setOpen]=useState(false);
  const on=h=>cur===h||(h!=='/'&&cur.startsWith(h))?'on':'';
  const sw=lang==='sw';
  return <header className="an"><div className="anw">
    <Link className="logo" to="/">{D.name}</Link>
    <nav className="anl">{LINKS.map(([h,l])=><Link key={h} className={on(h)} to={h}>{t(l)}</Link>)}</nav>
    <div className="anr">
      <button className="lgb" onClick={()=>setLang(sw?'en':'sw')} aria-label={sw?'English':'Kiswahili'}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg>{sw?'English':'Kiswahili'}
      </button>
      <Link className="cm" to="/contact">{t('Contact Me ›')}</Link>
      <button className="anh" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(o=>!o)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
  <div className={'anm'+(open?' open':'')} onClick={()=>setOpen(false)}>
    {LINKS.map(([h,l])=><Link key={h} className={on(h)} to={h}>{t(l)}</Link>)}
    <Link className={on('/contact')} to="/contact">{t('Contact')}</Link><Link className="stfl" to="/staff">{t('Staff login')}</Link>
  </div></header>;
}
