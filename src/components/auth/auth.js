import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../App.css";
import React from "react";

const AuthPage = () => {
    let history = useHistory();
    return (
        <div className="auth-div">
            <img style={{"marginBottom":"1rem"}} height="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Symbol_from_Marvel%27s_The_Avengers_logo.svg/1754px-Symbol_from_Marvel%27s_The_Avengers_logo.svg.png" alt="" />
            <h2>Avengers Assemble</h2>
            <div>
                <Button variant="light" className="auth-button" onClick={() => history.push('/signin/signup')} type="button">Sign Up</Button>
                <Button variant="dark" className="auth-button" onClick={() => history.push('/signin/login')} type="button">Log In</Button>
            </div>
        </div>
    );
}

export default AuthPage;