import { NavLink } from "react-router"

function NavBar() {

    return (
        <header>
            <nav>
                <NavLink to="/tracks" end>Tracks</NavLink>
                <NavLink to="/artists" end>Artists</NavLink>
            </nav>
        </header>
    )
}

export default NavBar