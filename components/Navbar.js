import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <Link href="/">
                <a className="home">Home</a>
            </Link>
            <Link href="/about">
                <a className="about">About</a>
            </Link>
        </div>
    )
}

export default Navbar;
