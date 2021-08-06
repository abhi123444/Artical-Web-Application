import React,{useState} from "react";
import Posts from "./Posts";
import Post from "./Post";
import Createpost from "./Createpost";
import Updatepost from "./Updatepost";
import Signup from "./Signup";
import Signin from "./Signin"
import 'antd/dist/antd.css';
import {Menu} from 'antd';
import { BookOutlined , HighlightOutlined } from '@ant-design/icons';
import {Router,Link,navigate} from "@reach/router";
import firebase from "firebase";

const App = () =>{   

    const [user,setUser] = useState(false);

    firebase.auth().onAuthStateChanged(function(data) {
        if (data) {
            
          setUser(data);
        } else {
          console.log("no user Sign in")
        }
      });
      const onSignout = () =>{

          firebase.auth().signOut()
              .then(() => {
                  console.log("user signed out")
                  setUser(false);
                  navigate("/signin");
              }).catch((error) => {
                console.log("error"+error)
              });
      }

    return(
        <div className="app_container">
            <div className="app_main_navigation ">
            <Menu  mode="horizontal">
                {user
                    &&  <>
                            <Menu.Item
                                key="book" 
                                icon={<BookOutlined />}>
                                <Link to="/posts">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="createPost" icon={<HighlightOutlined />}>
                                <Link to="/createPost">Create Post</Link>
                            </Menu.Item>
                        </>
                }

                { !user
                    ?   <Link to="/signin" style={{float:"right"}}>Sign in</Link>                   
                    :   <a onClick={onSignout} style={{float:"right"}} >Sign out</a>
                }

            </Menu>
            </div>
    
            <Router>
                <Signin path="/signin" default />
                <Signup path="/signup" />
                <Posts  path="/posts" user ={user}/>
                <Post path="/post/:id" user ={user} />
                <Createpost path="/createPost"user ={user} />
                <Updatepost path="/edit/:id"user ={user} />
            </Router>
        </div>
    )
}

export default App;