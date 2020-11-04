import Link from 'next/link';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link href="/">
            <a class="nav-link" >Home</a>
            </Link> 
            </li>
            <li class="nav-item">
            <Link href="/about"><a class="nav-link" >About us</a></Link>
            </li>
          </ul>
         
        </div>
      </nav>
       
    )
}

export default Navbar;
