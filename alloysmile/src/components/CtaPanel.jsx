import {Link} from 'react-router-dom';import {D} from '../data/site.js';import {useLang} from '../context/LangContext.jsx';
export default function CtaPanel(){const {t}=useLang();
  return <section className="cta"><div className="wrap"><div className="panel"><h2>{t('Ready for a healthier smile?')}</h2><p style={{opacity:.85}}>{t('Call or message to book your visit.')}</p>
    <div className="row" style={{justifyContent:'center'}}><Link className="btn" to="/contact">{t('Book an appointment')}</Link><Link className="btn ghost" to="/contact">{D.phone}</Link></div></div></div></section>;
}
