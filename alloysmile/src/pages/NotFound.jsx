import {Link} from 'react-router-dom';import Layout from '../components/Layout.jsx';
export default function NotFound(){return <Layout><section><div className="wrap"><h1>Page not found</h1><Link to="/">Go home</Link></div></section></Layout>}
