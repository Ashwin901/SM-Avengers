import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { db } from "../auth/config";
import NavbarComponent from "../NavbarComponent";
import "../App.css";

const LandingPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await db.collection("posts").get();
            const userPosts = [];
            data.docs.map(doc => userPosts.push(doc.data()));
            setPosts(userPosts);
        }

        getPosts();

    }, []);

    return (
        <>
            <NavbarComponent />
            <div className="landing-div">

                {posts || posts?.length === 0 ? posts.map(post => {
                    return (
                        <Card className="post-card" style={{ width: '25rem' }}>
                            <Card.Img className="card-img" variant="top" src={post.imageUrl} />
                            <Card.Body>
                                <Card.Title style={{"fontWeight":"bold"}}>{post.caption}</Card.Title>
                                <Card.Text>
                                    By {post.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                }) : <p>No posts </p>}
            </div>
        </>

    );
}

export default LandingPage;