import Navbar from './Navbar';
import Head from 'next/head';


function Layout( props ) {  
    return (
        <div>
        <Head>
            <title>Next App</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
        </Head>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout
