import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import NoMatch from './Pages/NoMatch';
import Login  from './Pages/Login';
import MainLayout from './Layouts/MainLayout';
import {AppContextProvider} from './Context/AppContext';
import { ProtectedRoute } from './Components/ProtectedRoute';

function App() {
  return (
   
      <Router>
         <AppContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><MainLayout/></ProtectedRoute>} >
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </AppContextProvider>
      </Router>
   
  )
}

export default App
