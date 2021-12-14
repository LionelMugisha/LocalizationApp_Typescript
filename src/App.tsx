import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import Register from './component/Register'
import NotFound from './component/NotFound'
import Navbar from './component/Navbar'
import { AuthContext } from './component/context/AuthContext'
import PrivateRoutes from './PrivateRoute'

const App: React.FC = () => {
	const { currentUser } = useContext(AuthContext);

  return (
    <>
        <div className="max-w-7xl mx-auto rounded-sm mt-1 ml-92">
        <Navbar />
          <Routes>
            <Route path="/" element={currentUser ? <Dashboard /> : <Login />} />
            <Route
              path="/Register"
              element={currentUser ? <Dashboard /> : <Register />}
              />
            <Route
              path="/Dashboard"
              element={<PrivateRoutes component={Dashboard} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </>
  );
};

export default App;
