import React,{useState,useEffect} from "react";
import {PageHeader, Card } from "antd";
import db from "../firebase";
const Post = (props) => {

    console.log(props);
    const [title,setTitle] = useState('');
    const[content,setContent] = useState('');
    useEffect(()=>{
       let postref =db.collection('users').doc(props.user.uid).collection("posts").doc(props.id)
       postref
            .get()
            .then(doc => {
                let{title,content} =doc.data()
                setTitle(title)
                setContent(content)
            })
       
    },[])
     return(
        <div className="article_container">
            <div className="page_header_container">
                <PageHeader
                    style={{border:"1px solid rgb(235,237,240)"}}
                    title="Article Hub"  
                />
            </div>
            <div classNAme="article_content_container">
                <Card
                    style={{ 
                            marginTop: 16  
                    }}
                    type="inner"
                    title={title}
                >
                    {
                        content.split('\n').map((paragraph,idx) =>{
                           return <p key={idx}>{paragraph}</p>; 
                        })
                    }                
                </Card>
            </div>
            
               
        </div>
        
    )
}

export default Post;