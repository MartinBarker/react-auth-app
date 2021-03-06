import React from "react"
import Signup from "./Signup"
import Login from "./Login"
import Tagger from "./Tagger"
import MainSidebar from "./MainSidebar"
import RenderTune from "./RenderTune"
import ForgotPassword from "./ForgotPassword"
import PrivateRoute from './PrivateRoute'
import UpdateProfile from "./UpdateProfile"
import Dashboard from "./Dashboard"
import { AuthProvider } from "../Contexts/AuthContext"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* User Auth Stuff */}
          <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/update-profile" element={<PrivateRoute> <UpdateProfile /> </PrivateRoute>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />

          <Route exact path="/tagger" element={ <MainSidebar> <Tagger/> </MainSidebar> } />

          <Route exact path="/rendertune" element={ <MainSidebar> <RenderTune/> </MainSidebar> } />

      
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
