import {Link} from 'react-router-dom';import {D} from '../data/site.js';import {useLang} from '../context/LangContext.jsx';
const T='M32 12c-5-4-15-2-15 9 0 7 3 9 4 16 1 5 3 11 6 11 2 0 2-7 5-7s3 7 5 7c3 0 5-6 6-11 1-7 4-9 4-16 0-11-10-13-15-9z';
export default function Footer(){const {t}=useLang();
  return <footer><div className="wrap fgrid">
    <div><Link className="logo" to="/"><i><svg width="20" height="20" viewBox="0 0 64 64" fill="#fff"><path d={T}/></svg></i>{D.name}</Link><p>{t(D.bio)}</p></div>
    <div><h3>{t('Quick links')}</h3>{[['/','Home'],['/about','About'],['/services','Services'],['/cases','Cases'],['/insights','Insights'],['/contact','Contact']].map(([h,l])=><Link key={h} to={h}>{t(l)}</Link>)}</div>
    <div><h3>{t('Get in touch')}</h3><span>{D.phone}</span><span>WhatsApp {D.whatsapp}</span><span>{D.email}</span><span>{D.address}</span><span>{D.hours}</span><Link to="/staff">{t('Staff login')}</Link></div>
  </div></footer>;
}
