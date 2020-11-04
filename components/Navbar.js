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
            <style jsx>{`
                
                a{
                    color : black;
                    text-decoration: none;
                    padding: 10px 20px;
                    display : inline-block;
                    background: white;
                    border: 1px solid black;
                    margin-right: 10px
                    }
                
            `}
            </style>
        </div>
    )
}

export default Navbar;
