import {Link,useParams} from 'react-router-dom';
import Layout from '../components/Layout.jsx';import PageHeader from '../components/PageHeader.jsx';import CtaPanel from '../components/CtaPanel.jsx';import ServiceCards from '../components/ServiceCards.jsx';
import {D} from '../data/site.js';import {ILL} from '../data/illustrations.js';import {IC} from '../data/icons.js';import {useLang} from '../context/LangContext.jsx';import useTitle from '../lib/useTitle.js';
import NotFound from './NotFound.jsx';
export function Services(){const {t}=useLang();useTitle('Services | '+D.name);
  return <Layout><PageHeader word="Services" eyebrow="Services" title="Our treatments" sub="Clear treatments, explained before we start."/>
    <section><div className="wrap"><div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(310px,1fr))'}}><ServiceCards list={D.services}/></div></div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">{t('How it works')}</span><h2>{t('From booking to treatment')}</h2></div>
      <div className="steps">{[['Book','Choose a time that suits you'],['Consultation','We listen and examine'],['Treatment plan','Clear steps and costs'],['Treatment','Comfortable, careful care']].map(([a,b])=><div key={a}>{t(a)}<small>{t(b)}</small></div>)}</div></div></section>
    <CtaPanel/></Layout>;
}
export function ServiceDetail(){const {slug}=useParams();const {t}=useLang();const s=D.services.find(x=>x.slug===slug);useTitle(s?s.name+' | '+D.name:D.name);
  if(!s)return <NotFound/>;const rel=D.services.filter(x=>x.slug!==slug).slice(0,3);
  return <Layout><PageHeader word="Service" eyebrow="Treatment" title={s.name} sub={s.short}/>
    <section><div className="wrap split" style={{alignItems:'start'}}><div>
      <div className="ilb big" dangerouslySetInnerHTML={{__html:ILL[s.slug]}}/><p className="cap">{t(s.cap)}</p>
      <span className="eyebrow">{t('Overview')}</span><h2>{t(s.name)}</h2><p style={{color:'var(--muted)'}}>{t(s.over)}</p>
      <h3 style={{marginTop:32}}>{t('What to expect')}</h3><div className="steps">{s.steps.map(x=><div key={x}>{t(x)}</div>)}</div></div>
      <div className="card"><div className="ico" dangerouslySetInnerHTML={{__html:IC[s.ic]}}/><h3>{t('At a glance')}</h3><p>{t(`Visits: ${s.visits}`)}</p><div className="row"><Link className="btn" to="/contact">{t('Book this treatment')}</Link></div></div></div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">{t('Related')}</span><h2>{t('Other treatments')}</h2></div><div className="grid"><ServiceCards list={rel}/></div></div></section></Layout>;
}
