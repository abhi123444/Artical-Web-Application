import React,{useState} from "react";
import {PageHeader,Input,Button} from "antd";
import {navigate} from "@reach/router";
import db from "../firebase";
const { TextArea } = Input;
const Createpost = (props) =>{

    const [title,setTitle] = useState('')
    const [content,setContent] =useState('')
    const onTitleChange = (event) =>setTitle(event.target.value);
    const onContentChange = (event) =>setContent(event.target.value);
    
    const onCreatepost =()=>{
        db.collection("users").doc(props.user.uid).collection("posts").add({
            title,
            content
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        navigate("/posts");
    }
    return(
        <div className="create_posts_container">
            <div className="page_header_container">
                <PageHeader
                    style={{border:"1px solid rgb(235,237,240)"}}
                    title="Create Post"  
                />
            </div>
            <div className="post_inputs_container">
                <div className="post_input_container">
                    <div className="post_input_title">
                        <h4>Title</h4>
                    </div>
                    <div className="post_title_input">
                        <Input placeholder="Title" value={title} onChange={onTitleChange} />
                    </div>
                </div>
                <div className="post_input_container">
                    <div className="post_input_content">
                        <h4>Content</h4>
                    </div>
                    <div className="post_content_input">
                        <TextArea rows={10} placeholder="Write here..." value={content} onChange={onContentChange}/>
                    </div>
                </div>
                <div className="post_inputs_container">
                <Button type="primary" block  onClick={onCreatepost} >
                     Save
                </Button>
                </div>
            </div>
        </div>
          
    )
}

export default Createpost;