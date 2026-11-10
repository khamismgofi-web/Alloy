import {Link,useParams} from 'react-router-dom';
import Layout from '../components/Layout.jsx';import PageHeader from '../components/PageHeader.jsx';import CtaPanel from '../components/CtaPanel.jsx';import BeforeAfter from '../components/BeforeAfter.jsx';
import {D} from '../data/site.js';import {useLang} from '../context/LangContext.jsx';import useTitle from '../lib/useTitle.js';import NotFound from './NotFound.jsx';
export function Cases(){const {t}=useLang();useTitle('Cases | '+D.name);
  return <Layout><PageHeader word="Cases" eyebrow="Case gallery" title="Real results" sub="Only cases patients agreed to share are shown here."/>
    <section><div className="wrap"><div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))'}}>
      {D.cases.filter(c=>c.public_consent).map(c=><div key={c.id} className="card"><div style={{marginBottom:16}}><BeforeAfter/></div><h3>{t(c.concern)}</h3><p>{t(c.out)}</p><div className="row"><Link className="btn ghost" to={`/cases/${c.id}`}>{t('View case')}</Link></div></div>)}</div></div></section><CtaPanel/></Layout>;
}
export function CaseDetail(){const {id}=useParams();const {t}=useLang();const c=D.cases.find(x=>String(x.id)===id&&x.public_consent);useTitle('Case | '+D.name);
  if(!c)return <NotFound/>;
  return <Layout><PageHeader word="Case" eyebrow="Case study" title={c.concern}/>
    <section><div className="wrap split" style={{alignItems:'start'}}><div><BeforeAfter/></div><div className="card">
      <p><b>{t('Treatment:')}</b> {t(c.treat)}</p><p><b>{t('Duration:')}</b> {t(c.dur)}</p><p><b>{t('Outcome:')}</b> {t(c.out)}</p>
      <p className="pill" style={{display:'inline-block'}}>{t('The patient gave consent to publish this case')}</p><div className="row"><Link className="btn" to="/cases">{t('All cases')}</Link></div></div></div></section></Layout>;
}
