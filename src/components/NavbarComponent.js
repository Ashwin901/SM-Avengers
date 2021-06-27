import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Button} from "react-bootstrap";
import { auth } from "./auth/config";

const NavbarComponent = () => {
    let history = useHistory();
    const logout = async () => {
        if (window.confirm("Are you sure you want to logout?")) {
            try {
                await auth.signOut();
                history.replace("/auth");
            } catch (e) {

            }
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
              history.push("/auth");
            }
            return;
          });
    });

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="https://img.pngio.com/amazoncom-ur-impressions-avengers-logo-decal-vinyl-sticker-avengers-logo-425_446.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Avengers
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Button className="nav-button" onClick={() => history.push('/post/newpost')} variant="primary" type="button">New Post</Button>
                <Button className="nav-button" onClick={logout} variant="danger" type="button">Log out</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;