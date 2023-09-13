import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
export const Header = () => {
    const {token,onLogout} = useAuth();
    console.log(token);
    return <nav className="flex justify-center py-3 gap-5 mb-5 font-semibold bg-primary text-white">
    {token &&    
    <div>
    <Link className="mx-3" to="/home">Home</Link> 
    <button onClick={() => {onLogout()}} className="mx-3" to="/logout">Logout</button> 
    </div>

    
    }
    {!token &&
     <Link to="/login">Login</Link>
    }
   


    </nav>
}