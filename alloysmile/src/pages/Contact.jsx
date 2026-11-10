import {useState} from 'react';
import Layout from '../components/Layout.jsx';import PageHeader from '../components/PageHeader.jsx';
import {D} from '../data/site.js';import {useLang} from '../context/LangContext.jsx';import {useStore} from '../context/StoreContext.jsx';import useTitle from '../lib/useTitle.js';
const EMPTY={a:'',b:'',c:'',d:D.services[0].name,e:''};
export default function Contact(){const {t}=useLang();const {addRequest}=useStore();const [f,setF]=useState(EMPTY);const [sent,setSent]=useState(false);useTitle('Contact | '+D.name);
  const set=k=>e=>setF({...f,[k]:e.target.value});
  const submit=e=>{e.preventDefault();addRequest({a:f.a,b:f.b,c:f.c,d:f.d});setF(EMPTY);setSent(true)};
  return <Layout><PageHeader word="Contact" eyebrow="Contact" title="Book an appointment" sub="We will confirm your request by phone."/>
    <section><div className="wrap split" style={{alignItems:'start'}}>
      <form className="card" onSubmit={submit}><h2 style={{fontSize:'1.5rem'}}>{t('Appointment request')}</h2>
        <label htmlFor="a">{t('Name')}</label><input id="a" required value={f.a} onChange={set('a')}/>
        <label htmlFor="b">{t('Phone')}</label><input id="b" type="tel" required value={f.b} onChange={set('b')}/>
        <label htmlFor="c">{t('Preferred date and time')}</label><input id="c" type="datetime-local" required value={f.c} onChange={set('c')}/>
        <label htmlFor="d">{t('Service')}</label><select id="d" value={f.d} onChange={set('d')}>{D.services.map(s=><option key={s.slug} value={s.name}>{t(s.name)}</option>)}</select>
        <label htmlFor="e">{t('Message')}</label><textarea id="e" rows="3" value={f.e} onChange={set('e')}/>
        <div className="row"><button className="btn" type="submit">{t('Send request')}</button></div>
        {sent&&<div className="msg">{t('Request sent. The clinic will confirm by phone.')}</div>}</form>
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <div className="card"><h3>{t('Phone')}</h3><p>{D.phone}</p></div><div className="card"><h3>WhatsApp</h3><p>{D.whatsapp}</p></div>
        <div className="card"><h3>{t('Address')}</h3><p>{D.address}</p></div><div className="card"><h3>{t('Hours')}</h3><p>{D.hours}</p></div>
        <div className="card" style={{gridColumn:'span 2'}}><div className="ph">{t('Map placeholder')}</div></div>
        <div className="card" style={{gridColumn:'span 2'}}><h3>{t('Emergency')}</h3><p>{t('For urgent pain or swelling outside opening hours, call or WhatsApp the clinic number directly.')}</p></div></div></div></section></Layout>;
}
