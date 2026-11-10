import {useEffect} from 'react';import {Routes,Route,Link,useLocation} from 'react-router-dom';
import {useLang} from './context/LangContext.jsx';
import Home from './pages/Home.jsx';import About from './pages/About.jsx';import {Services,ServiceDetail} from './pages/Services.jsx';
import {Cases,CaseDetail} from './pages/Cases.jsx';import {Insights,Article} from './pages/Insights.jsx';import Contact from './pages/Contact.jsx';import Staff from './pages/Staff.jsx';import NotFound from './pages/NotFound.jsx';
function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
export default function App(){const {t}=useLang();
  return <>
    <ScrollTop/>
    <Routes>
      <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/>
      <Route path="/cases" element={<Cases/>}/><Route path="/cases/:id" element={<CaseDetail/>}/>
      <Route path="/insights" element={<Insights/>}/><Route path="/insights/:slug" element={<Article/>}/>
      <Route path="/contact" element={<Contact/>}/><Route path="/staff" element={<Staff/>}/><Route path="*" element={<NotFound/>}/>
    </Routes>
    <Link className="btn fab" to="/contact">{t('Book')}</Link>
  </>;
}
