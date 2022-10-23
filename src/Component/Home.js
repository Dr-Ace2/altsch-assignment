import { Link, Outlet } from "react-router-dom";
import './Styles/Home.css';

const Home = () => {
    return(
         <>
             <nav className="homebg">
                <Link to='/' className="link">Home</Link>
                <Link to='users' className="link">Users</Link>
                <Link to='contact' className="link">Contact</Link>
             </nav>
             <Outlet/>
         </>
    )
}

export default Home;