import { useContext } from "react";
import {AppContext} from "../Context/AppContext";
export const useAuth = () => {
    return  useContext(AppContext)
  }