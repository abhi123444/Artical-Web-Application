import React,{useState,useEffect} from "react";
import {PageHeader,Input,Button} from "antd";
import {navigate} from "@reach/router";
import db from "../firebase";
const { TextArea } = Input;

const Updatepost = (props) =>{
    const [content,setContent] =useState('')
    const [title,setTitle] =useState('')

    useEffect(() =>{
        let postRef = db.collection('users').doc(props.user.uid).collection("posts").doc(props.id);

        postRef
            .get()
            .then(doc => {
                let {content, title} = doc.data()
                setTitle(title)
                setContent(content)
            })
    },[])

    const onUpdatepost =()=>{

        let postref = db.collection('users').doc(props.user.uid).collection("posts").doc(props.id);
        let payload = {title , content};
        postref.update(payload)
        .then((doc) => {
            console.log("Post Updated...: ", doc.id);
            setTitle('');
            setContent('');
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        navigate('/posts')
    }


    const onTitleChange = (event) =>setTitle(event.target.value);
    const onContentChange = (event) =>setContent(event.target.value);
    
    return(
        <div className="create_posts_container">
           <div className="page_header_container">
                <PageHeader
                    style={{border:"1px solid rgb(235,237,240)"}}
                    title="Update Post"  
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
                <Button type="primary" block  onClick={onUpdatepost} >
                     Save
                </Button>
                </div>
            </div>
        </div>
          
    )
}

export default Updatepost;