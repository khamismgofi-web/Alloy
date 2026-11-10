import {useState} from 'react';
import Layout from '../components/Layout.jsx';import PageHeader from '../components/PageHeader.jsx';
import {D} from '../data/site.js';import {fuzzy} from '../lib/fuzzy.js';import {useLang} from '../context/LangContext.jsx';import {useStore} from '../context/StoreContext.jsx';import useTitle from '../lib/useTitle.js';
export default function Staff(){const {t}=useLang();const {role,setRole,requests}=useStore();const [pick,setPick]=useState('dentist');const [q,setQ]=useState('');useTitle('Staff | '+D.name);
  if(!role)return <Layout><PageHeader word="Staff" eyebrow="Staff area" title="Staff login" sub="Demo only. No real authentication yet."/>
    <section><div className="wrap" style={{maxWidth:420}}><div className="card"><label htmlFor="ro">{t('Role')}</label>
      <select id="ro" value={pick} onChange={e=>setPick(e.target.value)}><option value="dentist">{t('Dentist')}</option><option value="receptionist">{t('Receptionist')}</option></select>
      <div className="row"><button className="btn" onClick={()=>setRole(pick)}>{t('Log in')}</button></div></div></div></section></Layout>;
  const rows=D.patients.filter(p=>fuzzy(p.n+' '+p.plan,q));const dentist=role==='dentist';
  return <Layout><section><div className="wrap">
    <div className="row" style={{justifyContent:'space-between',margin:'0 0 20px'}}><h1 style={{margin:0}}>{t('Dashboard')} <span className="pill">{t(role)}</span></h1><button className="btn ghost" onClick={()=>setRole(null)}>{t('Log out')}</button></div>
    <div className="grid" style={{marginBottom:28}}>{[[D.patients.length,'Patients'],[requests.length,'Pending requests'],[4,'Reminders queued']].map(([n,l])=><div key={l} className="card stat"><b>{n}</b><span>{t(l)}</span></div>)}</div>
    <h2 style={{fontSize:'1.5rem'}}>{t('Patients')}</h2><input placeholder={t('Search patients, typos allowed')} aria-label={t('Search patients')} value={q} onChange={e=>setQ(e.target.value)}/>
    <div className="wide card" style={{marginTop:14,padding:8}}><table><thead><tr><th>{t('Name')}</th><th>{t('Plan')}</th><th>{t('Status')}</th><th>{t('Last visit')}</th>{dentist&&<th>{t('Progress notes')}</th>}</tr></thead>
      <tbody>{rows.length?rows.map(p=><tr key={p.n}><td>{p.n}</td><td>{t(p.plan)}</td><td><span className="pill">{t(p.status)}</span></td><td>{p.last}</td>{dentist&&<td>{t(p.notes)}</td>}</tr>):<tr><td colSpan="5">{t('No patients match your search.')}</td></tr>}</tbody></table></div>
    <h2 style={{marginTop:40,fontSize:'1.5rem'}}>{t('Pending appointment requests')}</h2>
    {requests.length?requests.map((r,i)=><div key={i} className="card" style={{marginBottom:10}}><b>{r.a}</b> {t(`(${r.b}) wants ${r.d} on ${r.c}`)}<br/><span className="pill">{t('pending')}</span></div>):<p style={{color:'var(--muted)'}}>{t('No requests yet. Submit one from the Contact page.')}</p>}
  </div></section></Layout>;
}
