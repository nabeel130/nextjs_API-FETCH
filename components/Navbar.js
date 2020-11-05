import Link from 'next/link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link href="/">
            <a className="nav-link" >Home</a>
            </Link> 
            </li>
            <li className="nav-item">
            <Link href="/about"><a className="nav-link" >About us</a></Link>
            </li>
          </ul>
         
        </div>
      </nav>
       
    )
}

export default Navbar;
