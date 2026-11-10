import {Link} from 'react-router-dom';import {ILL} from '../data/illustrations.js';import {useLang} from '../context/LangContext.jsx';
export default function ServiceCards({list}){const {t}=useLang();
  return list.map(s=><Link key={s.slug} className="card" to={`/services/${s.slug}`}><div className="ilb" style={{marginBottom:18}} dangerouslySetInnerHTML={{__html:ILL[s.slug]}}/><h3>{t(s.name)}</h3><p>{t(s.short)}</p></Link>);
}
