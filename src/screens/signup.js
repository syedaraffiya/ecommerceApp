import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "./firebase";
import { db,set, ref } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";



function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate()
  
    const signUp = (e) => {
      e.preventDefault();
      let obj = {
        name,
        email,
        password,
      };
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          let uid = res.user.uid;
          console.log(uid);
          obj.uid = uid;
          const refrence = ref(db, `/users/${obj.uid}`);
          set(refrence, obj).then(() => {
            setEmail("");
            setPassword("");
            setName("");
            navigate("/login")

            alert("user created Successfully");
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
  
      console.log(obj);
    };
  return (
    <>
      <div className="login">
      <div className="login__container">
        <h1 >Sign Up</h1>
        <form onSubmit={(e) => signUp(e)}>
          <div>
            <input
            style={{margin:6}}
              value={name}
              placeholder="Enter User Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
             style={{margin:6}}
              value={email}
              placeholder="Enter Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
             style={{margin:6}}
              value={password}
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button onClick={signUp} type="submit" className="login__signInButton"> submit</button>
          {/* <div>
            <button className="login__signInButton"  value="Sign Up"></button>
          </div> */}
        </form>
        <div>
          {/* <Link  className="login__signInButton" to="/login">Login</Link> */}
        </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;