import {useLang} from '../context/LangContext.jsx';
export default function PageHeader({word,eyebrow,title,sub}){const {t}=useLang();
  return <header className="phd"><div className="wrap"><div className="pcard"><div className="mark2" aria-hidden="true">{word}</div><span className="eyebrow">{t(eyebrow)}</span><h1>{t(title)}</h1>{sub?<p>{t(sub)}</p>:null}</div></div></header>;
}
