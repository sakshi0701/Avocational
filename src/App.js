import React from "react"
import Signup from "./components/Front/Signup"
import { AuthProvider } from "../src/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../src/components/Dashboard"
import Login from "./components/Front/Login"
import PrivateRoute from "../src/components/PrivateRoute"
import ForgotPassword from "../src/components/ForgotPassword"
import UpdateProfile from "../src/components/UpdateProfile"
// import Profile from "./Profile Section/Profile"
// import Default from '../components/Default/Default'
import Footer from "./components/Footer/footer"

function App() {
  return (
    <div className="Container"
      className="d-flex"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              {/* <PrivateRoute path="/profile" component={Profile} /> */}
              {/* <Route component={Default} /> */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
        <Footer />
      </div>
      </div>
  )
}

export default App;