import React from "react";
import styled from "styled-components";
import Signup from "./components/Front/Signup"
import { AuthProvider } from "../src/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../src/components/Dashboard"
import Login from "./components/Front/Login"
import PrivateRoute from "../src/components/PrivateRoute"
import ForgotPassword from "../src/components/ForgotPassword"
import UpdateProfile from "../src/components/UpdateProfile"
import Footer from "./components/Footer/footer"
import Navbar from "./components/Navbar/navbar"
import Code from "./components/coding/Code";

function App() {
  return (
    <div className="Container"
      className="d-flex"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">
        <Navbar />
        <Main>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute path="/code" component={Code} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </Main>
        <Footer />
      </div>
    </div>
  )
}

export default App;



const Main = styled.div`
  margin-top: 80px;
`;