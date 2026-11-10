import {Link,useParams} from 'react-router-dom';
import Layout from '../components/Layout.jsx';import PageHeader from '../components/PageHeader.jsx';import CtaPanel from '../components/CtaPanel.jsx';
import {D} from '../data/site.js';import {useLang} from '../context/LangContext.jsx';import useTitle from '../lib/useTitle.js';import NotFound from './NotFound.jsx';
export function Insights(){const {t}=useLang();useTitle('Insights | '+D.name);
  return <Layout><PageHeader word="Insights" eyebrow="Insights" title="Patient education" sub="Short guides, reviewed by the dentist before publishing."/>
    <section><div className="wrap"><div className="grid">{D.articles.map(a=><Link key={a.slug} className="card" to={`/insights/${a.slug}`}>
      <div className="tile" style={{height:150,marginBottom:18}}>{t('Article image placeholder')}</div><span className="pill">{t(a.cat)}</span><h3 style={{marginTop:12}}>{t(a.title)}</h3><p>{a.time}</p></Link>)}</div></div></section><CtaPanel/></Layout>;
}
export function Article(){const {slug}=useParams();const {t}=useLang();const a=D.articles.find(x=>x.slug===slug);useTitle(a?a.title+' | '+D.name:D.name);
  if(!a)return <NotFound/>;
  return <Layout><PageHeader word="Insights" eyebrow={a.cat} title={a.title} sub={a.time}/>
    <section><div className="wrap" style={{maxWidth:720}}><p style={{color:'var(--muted)'}}>{t('[Article text to be written and medically reviewed by the dentist before publishing.]')}</p>
      <div className="row"><Link className="btn ghost" to="/insights">{t('All articles')}</Link></div></div></section><CtaPanel/></Layout>;
}
