import React ,{useState}from "react";
import {PageHeader,Input,Button,Space} from "antd";
import {navigate,Link} from "@reach/router";
import firebase from "firebase";
const Signin = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState(false);
    const onEmailchange = (event) =>setEmail(event.target.value);
    const onPasswordchange = (event) =>setPassword(event.target.value);

    const onSignup = () =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("user signed"+userCredential);
                setEmail('');
                setPassword('');
                navigate('/posts');  
             })
            .catch((error) => {
                 console.log(error);
                 setErrors('Please check Mail and Password')
                 setEmail('');
                 setPassword('');
            });
        
    }
   return(
    <div className="Signup_container">
        <div className="page_header_container">
                <PageHeader
                    style={{border:"1px solid rgb(235,237,240)"}}
                    title="Sign In"  
                />
        </div>

        <div className="signup_input_container" style={{marginTop:"20px"}}>
                    <div className="signup_input_title">
                        <h4>Email</h4>
                    </div>
                    <div className="post_title_input">
                        <Input placeholder="Enter Email"  onChange={onEmailchange}/>
                    </div>

        </div>
        <div className="signup_input_container" style={{marginTop:"20px"}}>
                    <div className="signup_input_title">
                        <h4>Password</h4>
                    </div>
                    <div className="post_title_input">
                            <Input.Password placeholder="password"  onChange={onPasswordchange}/>
                    </div>
                    
        </div>
        
        <div className="post_inputs_container" >
                
            <div>
                <Button type="primary" block  onClick={onSignup} >
                     Sign In
                </Button>
            </div>
            <div>
                <div style={{float:'right'}}>
                    <Link to="/signup">Don't have an account,Sign Up</Link>
                </div>
                <div style={{float:'left'}}>
                    {errors
                        &&
                        <p style={{color:"red"}}>{errors}</p>
                    }
                    
                </div>
            </div>

        </div>
    </div>
   )
}

export default Signin;