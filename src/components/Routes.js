import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./auth/signup";
import LandingPage from "./pages/LandingPage";
import NewPost from "./pages/NewPost";
import AuthPage from "./auth/auth";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LandingPage/>
                </Route>
                <Route path="/auth" >
                    <AuthPage/>
                </Route>
                <Route path="/signin/:method">
                    <SignUp/>
                </Route>
                <Route path="/post/newpost">
                    <NewPost/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
