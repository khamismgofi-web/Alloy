import Nav from './Nav.jsx';import Footer from './Footer.jsx';
export default function Layout({children,footer=true}){return <><Nav/>{children}{footer&&<Footer/>}</>}
