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
import Recipes from "./components/cooking/recipes/Recipes"
import NotesPg from "./components/cooking/pages/NotesPg"
import DrinksPg from "./components/cooking/pages/DrinksPg"
import DessertPg from "./components/cooking/pages/DessertPg"
import BakePg from "./components/cooking/pages/BakePg"
import VegPg from "./components/cooking/pages/VegPg"
import IndPg from "./components/cooking/pages/IndPg"
import Designing from "./components/designing/Designing"

function App() {
  return (
    <div className="Container d-flex"
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
                <PrivateRoute path="/cook" component={Recipes} />
                <PrivateRoute path="/recipe-notes" component={NotesPg} />
                <PrivateRoute path="/drinks" component={DrinksPg} />
                <PrivateRoute path="/dessert" component={DessertPg} />
                <PrivateRoute path="/bake" component={BakePg} />
                <PrivateRoute path="/veg" component={VegPg} />
                <PrivateRoute path="/ind" component={IndPg} />
                <PrivateRoute path="/design" component={Designing} />
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