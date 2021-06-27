import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../App.css";
import React from "react";

const AuthPage = () => {
    let history = useHistory();
    return (
        <div className="auth-div">
            <h2>Avengers Assemble</h2>
            <div>
                <Button className="auth-button" onClick={() => history.push('/signin/signup')} type="button">Sign Up</Button>
                <Button className="auth-button" onClick={() => history.push('/signin/login')} type="button">Log In</Button>
            </div>
        </div>
    );
}

export default AuthPage;