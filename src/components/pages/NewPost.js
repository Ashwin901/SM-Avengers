import React, { useState, useRef } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { storage, auth, db } from "../auth/config";
import NavbarComponent from "../NavbarComponent";

const NewPost = () => {
    const [imageFile, setImageFile] = useState(null);
    const [caption, setCaption] = useState("");
    const [img, setImg] = useState("");
    let history = useHistory();
    let inputRef = useRef();

    const uploadImage = (e) => {
        setImageFile(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        setImg(url);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageFile) {
            alert("Please upload a image");
            return;
        }
        if (caption.length === 0) {
            alert("Please enter an caption");
            return;
        }
        const storageRef = storage.ref();
        const fileRef = storageRef.child(imageFile.name);
        await fileRef.put(imageFile);
        const fileUrl = await fileRef.getDownloadURL();
        setImageFile(null);
        const user = await auth.currentUser;
        if (!user) {
            alert("Please log in");
            return;
        }
        await db.collection("posts").add({
            email: user.email,
            imageUrl: fileUrl,
            caption: caption
        });

        history.goBack();
    }

    return (
        <>

            <NavbarComponent />
            <div className="new-post-div">
                {img.length === 0 ? <div><p>No image selected</p></div> : <img src={img} height="200px" alt="" />}
                <Form className="form-div" onSubmit={handleSubmit}>
                    <div class="img-div">
                        <Button className="upload-button" onClick={() => { inputRef.current.click() }} type="button">
                            <input ref={inputRef} className="img-input" onChange={uploadImage} type="file" />
                            Upload image
                        </Button>
                    </div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Caption</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={caption}
                            onChange={(e) => setCaption(e.currentTarget.value)}
                        />
                    </InputGroup>
                    <Button type="submit" variant="success">Create new post</Button>
                </Form>
            </div>
        </>

    );
}

export default NewPost;