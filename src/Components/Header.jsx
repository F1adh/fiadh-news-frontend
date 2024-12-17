import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <h1>NorthCoders News</h1>
            <nav>
                <Link to="/">Home  </Link>
                <Link to="/article-list">articles</Link>
            </nav>
        </header>
    )
}

export default Header