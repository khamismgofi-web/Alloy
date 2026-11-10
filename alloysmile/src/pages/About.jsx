import Layout from '../components/Layout.jsx';import PageHeader from '../components/PageHeader.jsx';import CtaPanel from '../components/CtaPanel.jsx';
import {D} from '../data/site.js';import {IC} from '../data/icons.js';import {PHOTO} from '../data/photo.js';import {useLang} from '../context/LangContext.jsx';import useTitle from '../lib/useTitle.js';
export default function About(){const {t}=useLang();useTitle('About | '+D.name);
  const facts=<div className="facts sm">{D.facts.map(f=><div key={f[1]}><b>{f[0]}</b><span>{t(f[1])}</span></div>)}</div>;
  const info=[['search','Registration','TDA-2019-118, Tanzania Dental Association'],['spark','Memberships','Tanzania Dental Association; annual continuing education in restorative and cosmetic dentistry'],['sun','Languages','Kiswahili, English']];
  const phil=[['Listen first',"Every plan starts with understanding what you're actually worried about."],['Explain clearly','No procedure starts until you know what to expect and why.'],['Treat gently','Comfort matters as much as the outcome.']];
  return <Layout>
    <PageHeader word="About" eyebrow="About me" title="My story" sub={`Five years of steady, patient-first dental care in ${D.city}.`}/>
    <section><div className="wrap split"><div className="portrait" style={{padding:0,overflow:'hidden'}}><img src={PHOTO} alt={t(`Portrait of ${D.name}`)} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top',display:'block'}}/></div>
      <div><span className="eyebrow">{t('Career story')}</span><h2>{t('Care that starts with listening')}</h2>
        <p style={{color:'var(--muted)'}}>{t('I decided to become a dentist after watching a family member avoid care for years out of fear. That stayed with me, and it shapes how I treat every patient today: calmly, clearly, and without judgment.')}</p>
        <p style={{color:'var(--muted)'}}>{t("Since qualifying, I've worked in general practice and cosmetic dentistry, and I still spend time mentoring dental students. Outside the clinic, I'm active in Mwanza's growing tech and education community.")}</p>{facts}</div></div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">{t('Career timeline')}</span><h2>{t('Education and experience')}</h2></div>
      <div className="tlg">{D.timeline.map(x=><div key={x[0]} className="card"><span className="pill">{x[0]}</span><h3 style={{marginTop:14,fontSize:'1.05rem'}}>{x[1]}</h3></div>)}</div></div></section>
    <section><div className="wrap"><div className="grid">{info.map(([i,h,p])=><div key={h} className="card"><div className="ico" dangerouslySetInnerHTML={{__html:IC[i]}}/><h3>{t(h)}</h3><p>{t(p)}</p></div>)}</div></div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">{t('Philosophy of care')}</span><h2>{t('How I look after patients')}</h2></div>
      <div className="grid">{phil.map(([h,p],i)=><div key={h} className="card"><b className="num">0{i+1}</b><h3>{t(h)}</h3><p>{t(p)}</p></div>)}</div></div></section>
    <CtaPanel/>
  </Layout>;
}
