import React, { useState, useEffect } from "react";
import {PageHeader } from "antd";
import Snapshotpost from "./Snapshotpost";
import _ from "lodash";
import db from "../firebase";
const Posts = (props) => {

    const [posts,setPosts] = useState([]);
    console.log(props)
    useEffect(()=>{
 
        db.collection('users').doc(props.user.uid).collection("posts")
        .onSnapshot(async posts => {
            let postsData = await posts.docs.map(post => {
                let data = post.data();
                let {id} = post;

                let payload = {
                    id,
                    ...data
                }
                return payload;
            });
            setPosts(postsData);
        })
    },[])
    return(
        <div className="posts_container">
            <div className="page_header_container">
                <PageHeader
                    style={{border:"1px solid rgb(235,237,240)"}}
                    title="Life Diary"  
                />
            </div>
                
            <div  className="articles_container">
               { _.map(posts ,(article,idx) =>{
                     return(
                        <Snapshotpost
                             key={article.id} 
                             id={article.id}
                             title={_.capitalize(article.title )}
                             content={article.content.substring(1,500)}
                             user={props.user}
                        />
                   )
                })
            }
            </div>
        </div>

    )
}

export default Posts;