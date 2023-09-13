import {useState,createContext} from "react";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(() => {
      const token = localStorage.getItem("token");
      return token !== null;
    });
    async function auth(){
      localStorage.setItem('token','mytoken')
       return 'token'
    }
    const handleLogin = async (creds) => {
      console.log(creds);
      const token = await auth()
      if(token){
        setToken(token)
        navigate('/home')
      }else{
        return Error('Unable to login')
      }
    }
    const handleLogout = () => {
      localStorage.removeItem('token')
      setToken(null);
    };
  
    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }
    
    return <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
}
