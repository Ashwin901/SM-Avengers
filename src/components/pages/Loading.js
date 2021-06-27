import React from "react";
import { Spinner } from "react-bootstrap";
import "../App.css";

const Loading = () => {
    return (
        <div className="loading-div">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>

    );
}

export default Loading;