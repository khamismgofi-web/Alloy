import {Link} from 'react-router-dom';
import Layout from '../components/Layout.jsx';import CtaPanel from '../components/CtaPanel.jsx';import BeforeAfter from '../components/BeforeAfter.jsx';
import {D} from '../data/site.js';import {ILL} from '../data/illustrations.js';import {IC} from '../data/icons.js';import {TOOTH} from '../data/tooth.js';import {PHOTO} from '../data/photo.js';
import {useLang} from '../context/LangContext.jsx';import useTitle from '../lib/useTitle.js';
const Pt=({ic,title,text})=>{const {t}=useLang();return <div><i style={{display:'contents'}} dangerouslySetInnerHTML={{__html:IC[ic]}}/><span><b>{t(title)}</b><br/>{t(text)}</span></div>};
export default function Home(){
  const {t}=useLang();useTitle(D.name+' | Dentist');
  const cases=D.cases.filter(c=>c.public_consent);
  return <Layout>
    <header className="hx"><div className="hxw"><div className="hxc">
      <div className="hxm" aria-hidden="true">{D.short}</div>
      <div className="hxp"><img src={PHOTO} alt={t(`Portrait of ${D.name}`)}/></div>
      <div className="hxo" dangerouslySetInnerHTML={{__html:TOOTH}}/>
      <div className="hxt"><p className="k">{t('Hey This is')}</p><h1>{D.name}</h1>
        <p className="sub"><span>{t(D.title)}</span>. <span>{t(D.statement)}</span></p>
        <Link className="btn hb" to="/contact">{t('Book an appointment')} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:8}}><path d="M7 17L17 7M9 7h8v8"/></svg></Link></div>
      <div className="hxr"><b>{D.rating} ★</b><span>{t('Recommended by leading clinics and patients alike.')}</span></div>
      <div className="hxa"><span className="av"><i/><i/><i/></span><div><b>{D.facts[2][0]}</b><small>{t('Satisfied patients')}</small></div></div>
    </div></div></header>

    <section><div className="wrap why2"><div><span className="eyebrow">{t('Why me')}</span><h2 className="big">{t('Why me?')}</h2>
      <p style={{color:'var(--muted)',maxWidth:380}}>{t('A calm, thorough approach to dental care, built around what each patient actually needs.')}</p>
      <div className="row"><Link className="btn" to="/about">{t('More about me ↗')}</Link></div></div>
      <ol className="rows">{D.why.map((w,i)=><li key={i}><b>0{i+1}</b><div><h3>{t(w[0])}</h3><p>{t(w[1])}</p></div></li>)}</ol></div></section>

    <section className="alt"><div className="wrap intro"><div className="pf"><div className="pfc"><img src={PHOTO} alt={t(`Portrait of ${D.name}`)}/>
      <div className="pfi"><div><small>{t("Doctor's schedule")}</small><b>{t(D.offer)}</b><Link to="/contact">{t('Book now')}</Link></div><div><small>{t('Call now')}</small><b>{D.phone}</b></div></div></div></div>
      <div className="pft"><span className="eyebrow">{t('Let me introduce myself')}</span><h2>{t(`I'm ${D.name}, ${D.title} in ${D.city}`)}</h2><p className="lede">{t(D.bio)}</p>
        <div className="pts"><Pt ic="search" title="Dental advice and check-ups" text="Clear guidance you can act on, not just a diagnosis."/><Pt ic="drop" title="Trusted dental treatment" text="Modern techniques, explained before we begin."/><Pt ic="sun" title="Emergency help" text="Same-day slots kept open for urgent cases."/></div>
        <div className="row"><Link className="btn" to="/contact">{t('Book an appointment')}</Link><Link className="btn ghost" to="/about">{t('More about me ↗')}</Link></div></div></div></section>

    <section><div className="wrap"><div className="whyh"><h2 className="big">{t('Services')}</h2><Link className="btn ghost" to="/services">{t('All services')}</Link></div>
      <div className="scards">{D.services.map(s=><Link key={s.slug} className="card scard" to={`/services/${s.slug}`}><div className="ilb" dangerouslySetInnerHTML={{__html:ILL[s.slug]}}/><div className="sb"><h3>{t(s.name)}</h3><p>{t(s.short)}</p></div><i>↗</i></Link>)}</div></div></section>

    <section><div className="wrap"><div className="bluep"><div><span className="eyebrow" style={{color:'#cfe0ff'}}>{t('Finest dental care')}</span><h2>{t('Everything for a healthy mouth')}</h2>
      <ul className="ck">{[['Oral health','Cleanings and check-ups to keep small problems from becoming big ones.'],['Gum care','Treatment for sensitive, bleeding, or receding gums.'],['Restorative work','Fillings, crowns, and root canals to save and rebuild teeth.'],['Cosmetic dentistry','Whitening and bonding for a smile you feel good about.']].map(([a,b])=><li key={a}>{t(a)} <small>{t(b)}</small></li>)}</ul></div>
      <div className="t2" dangerouslySetInnerHTML={{__html:TOOTH}}/></div></div></section>

    <section><div className="wrap"><div className="facts">{D.facts.map(f=><div key={f[1]}><b>{f[0]}</b><span>{t(f[1])}</span></div>)}</div></div></section>

    <section className="alt"><div className="wrap"><div className="whyh"><h2 className="big">{t('My latest cases')}</h2><Link className="btn ghost" to="/cases">{t('All cases')}</Link></div>
      <div className="hs">{cases.map(c=><div key={c.id} className="card"><div style={{marginBottom:16}}><BeforeAfter/></div><h3>{t(c.concern)}</h3><p>{t(c.out)}</p></div>)}<Link className="card endc" to="/cases">{t('See all cases ↗')}</Link></div></div></section>

    <section><div className="wrap"><div className="head"><span className="eyebrow">{t('Your first visit')}</span><h2 className="big" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>{t('Simple from the start')}</h2></div>
      <div className="proc">{[['Book','Choose a time that suits you'],['Consultation','We listen and examine'],['Treatment plan','Clear steps and costs'],['Treatment','Comfortable, careful care']].map(([a,b])=><div key={a}><b>{t(a)}</b><small>{t(b)}</small></div>)}</div></div></section>

    <section className="alt"><div className="wrap"><div className="bigq"><span className="qm">“</span>
      <p>{t('Dr. Alo explained everything before starting and the whole visit was painless. My kids actually look forward to check-ups now.')}</p>
      <div className="who"><i/><div><b>Grace</b><br/><small>{t('Parent, long-time patient')}</small></div></div></div></div></section>

    <section><div className="wrap faq2"><div><span className="eyebrow">{t('FAQ')}</span><h2 className="big" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>{t('Common questions')}</h2>
      <div className="card" style={{marginTop:20}}><h3>{t('Still have a question?')}</h3><p>{D.phone}</p><div className="row"><Link className="btn" to="/contact">{t('Contact me')}</Link></div></div></div>
      <div>{D.faqs.map(f=><details key={f[0]}><summary>{t(f[0])}</summary><p>{t(f[1])}</p></details>)}</div></div></section>
    <CtaPanel/>
  </Layout>;
}
