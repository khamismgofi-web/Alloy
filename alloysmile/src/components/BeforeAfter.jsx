import {useState} from 'react';import {useLang} from '../context/LangContext.jsx';
export default function BeforeAfter(){const {t}=useLang();const [v,setV]=useState(50);
  return <div className="ba" role="group" aria-label={t('Before and after comparison')}>
    <div className="after">{t('After [placeholder]')}</div>
    <div className="before" style={{clipPath:`inset(0 ${100-v}% 0 0)`}}>{t('Before [placeholder]')}</div>
    <input type="range" min="0" max="100" value={v} aria-label={t('Comparison slider')} onChange={e=>setV(+e.target.value)}/>
  </div>;
}
