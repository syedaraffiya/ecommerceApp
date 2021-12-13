import React from "react" ;
import "./login.css";
// import { useState } from "react";
import { useNavigate } from "react-router";
import { ref,set, onValue } from "./firebase";
import {useState} from "react"
import { auth,createUserWithEmailAndPassword } from "./firebase";
//  import firebase from "firebase";
//  import { auth } from "./firebase";
// import { useNavigate } from "react-router";
//  import { db, get, ref, onValue } from "./firebase";
 
// import { useHistory } from 'react-router-dom';


function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const login = (e) => {
  e.preventDefault();
     let obj = {
  email,
  password,
  };
  createUserWithEmailAndPassword(auth,obj.email,obj.password) 
//   .then((res)=>{
//     console.log(res.user.uid);
//     setEmail("")
//     setPassword("");
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
//   console.log(obj);
// };



.then((succes) => {
  console.log("User Sign In Successfully ", succes);
  const refrence = ref( `/users/${succes.user.uid}`);

  onValue(refrence, (snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      let userObj = snapshot.val();
      navigate("/", { state: userObj });
    }
  });

  setEmail("");
  setPassword("");
})
.catch((err) => {
  console.log(err.message);
});
console.log(obj);
};

const signUp = (e) => {
  e.preventDefault();
  let obj = {
  
    email,
    password,
  };
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
      let uid = res.user.uid;
      console.log(uid);
      obj.uid = uid;
      const refrence = ref( `/users/${obj.uid}`);
      set(refrence, obj).then(() => {
        setEmail("");
        setPassword("");
       
        alert("user created Successfully");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  console.log(obj);
};
 
    return(
        <div className="login">
            
            <img className="login__logo" 
            src="https://archive.org/download/amazon-logo/amazon-logo.png"/>
        
            <div className="login__container">
                <h1>Sign In </h1>
                <form onSubmit={(e)=>login(e)}>
                    <h4>E-mail</h4>
                    <input value={email} type="email" onChange={(e)=> setEmail(e.target.value)}></input>

                    <h4>Password</h4>

                            <input value={password} type="password "onChange={(e)=> setPassword(e.target.value)}></input>
        <div>
                    <button  type="submit" className="login__signInButton"> submit</button>
                    </div>
                </form>
                <p>By signing-up ,you agree to Amazon's Term and Condition</p>
                <button onClick={signUp}className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}
export default Login;