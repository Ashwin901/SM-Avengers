import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { auth } from "./config";
import Loading from "../pages/Loading";
import "../App.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const { method } = useParams();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email.length > 0 && password.length >= 6) {
        setLoading(true);
        if (method === "signup") {
          await auth.createUserWithEmailAndPassword(email, password);
        } else {
          await auth.signInWithEmailAndPassword(email, password);
        }

        setLoading(false);
        history.push("/");
      } else {
        alert("Enter valid email and password");
      }
    } catch (e) {
      setLoading(false);
      alert("Some error occurred please. Try again")
    }
  };

  return (
    <>
      {loading ? <Loading /> : <div className="signup-div">
        <h2>{method === "signup" ? "Sign Up" : "Log In"}</h2>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            {method === "signup" ? "Sign Up" : "Log In"}
          </Button>
        </Form>
      </div>}
    </>
  );

};

export default SignUp;

