import React from "react" ;
import "./login.css";
// import { useState } from "react";

import { db,ref, onValue,  } from "./firebase";
import {useState} from "react"
import { auth, signInWithEmailAndPassword } from "./firebase";
import { Link,useNavigate } from "react-router-dom";

//  import firebase from "firebase";
//  import { auth } from "./firebase";
// import { useNavigate } from "react-router";
//  import { db, get, ref, onValue } from "./firebase";
 
// import { useHistory } from 'react-router-dom';


function Login() {
 const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const loginuser = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((succes) => {
        console.log("User Sign In Successfully ", succes);
        const refrence = ref(db,`/users/${succes.user.uid}`);

        onValue(refrence, (snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            let userObj = snapshot.val();
            // navigate("/home", { state: userObj });
          }
        });

        setEmail("");
        setPassword("");
        navigate("/Home")
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(obj);
  };
 


 
    return(
        <div className="login">
            
            <img className="login__logo" 
            src="https://www.aliceinfoweb.com/admin/images/blog/hotal_booking.png"/>
        
            <div className="login__container">
                <h1>Sign In </h1>
                <form onSubmit={(e)=>loginuser(e)}>
                    <h4>E-mail</h4>
                    <input value={email} type="email" onChange={(e)=> setEmail(e.target.value)}></input>

                    <h4>Password</h4>

                    <input
             style={{margin:6}}
              value={password}
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
                           
        <div>
                    <button onChange={onValue} onClick={loginuser} type="submit" className="login__signInButton"> submit</button>
                    </div>
                </form>
                <p>By signing-up </p>
               
               
            </div>
        </div>
    )
}
export default Login;