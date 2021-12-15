import React from "react";
import"./login.css";
import { db,ref  } from "./firebase";
import {useState} from "react"
import { auth, createUserWithEmailAndPassword } from "./firebase";
import {useNavigate } from "react-router-dom";



function Booking(){
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [hotelname, sethotelname] = useState("");
  const [phone, setphone] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [password , setPassword] = useState("");
  const [country, setcountry] = useState("");
  const navigate =useNavigate()

  const submitData= async(e) =>{
        e.preventDefault();
        let obj = {
          name,
          hotelname,
          email,
          phone,
          CNIC,
         address,
             city ,
             password,
            country,
        };
        createUserWithEmailAndPassword(auth, obj.email, obj.name, obj.hotelname,  obj.phone,  obj.CNIC, obj.address, obj.city ,obj.country ,obj.password)
        .then((res) => {
          let uid = res.user.uid;
          console.log(uid);
          obj.uid = uid;
          
          const refrence = ref(db, `/users/${obj.uid}`);
          (refrence, obj).then(() => {
            
            
            setName("");
            sethotelname("")
            setEmail("");
            setPassword("");
            setaddress("");
            setCNIC("");
            setPassword("");
            setcountry("");
            setcity("")
            navigate("/login")
            alert("user created Successfully");
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
  
      console.log(obj);
    };

   


  const handleSubmit  = (event) => {
    event.preventDefault();
    alert('Booking confirm and Pay Your Bill Please ')
  }


//   const [userData,setUserData] = useState({
//     name:"",
//     email:"",
//     phone:"",
//     CNIC:"",
//     address:"",
//     city :"",
//     country:"",
//     post:"",
//   });
//   let name, value
//   const postUserData = (e) =>{
//     name = e.target.name;
//     value = e.target.value;

  
//     setUserData({...userData,[name]:value})
// console.log (setUserData)
//   }
//   const submitData= async(e) =>{
//     e.preventDefault();
//     const {  name, email,  phone,  CNIC,  address, city ,  post,  country} = userData;
//     const res = fetch(
//       "https://ecommerce-website-f3ac4-default-rtdb.firebaseio.com/userDataRecords",
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',

//       } ,
//       body : JSON.stringify({
//         name,
//            email,
//          phone,
//            CNIC,
//             address,
//              city ,
//              post,
//             country,

//       }),
//     }
//     )




      
//   if (res){
//      alert("Data Stored");
//   } else{
//   alert("plz fill the data");
  // }
  // };
  // const handleSubmit  = (event) => {
  //   event.preventDefault();
  //   alert('Booking confirm and Pay Your Bill Please ')
  // }
    // const navigate = useNavigate()
    
   
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");


  //   const loginuser = (e) => {
  //     e.preventDefault();
  //     let obj = {
  //       name,
  //       email,
  //       phone,
  //       CNIC,
  //       address,
  //       city ,
  //       post,
  //       country,
  //     };
  //     signInWithEmail(auth, obj.email, obj.name,obj.phone,obj.CNIC, obj.address, obj.city ,obj.country )
  //     .then((succes) => {
  //       console.log("User Sign In Successfully ", succes);
  //       const refrence = ref(db,`/users/${succes.user.uid}`);

  //       onValue(refrence, (snapshot) => {
  //         if (snapshot.exists()) {
  //           console.log(snapshot.val());
  //           let userObj = snapshot.val();
  //           // navigate("/home", { state: userObj });
  //         }
  //       });

  //       setEmail("");
  //       set("");
  //       navigate("/Home")
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  //   console.log(obj);
  // };
   
    

    return(
        <form method="POST" action="">

  <div className="login">
      <div className="login__container">
    <h2 class="heading">Booking & contact</h2>
    <div class="controls">
      
      <label for="name">  <input placeholder="name"type="text" onChange={(e)=> setName(e.target.value)} id="name" class="floatLabel" value={name} name="name"/></label>
    </div>
    <div class="controls">
   
      <label for="email"><input placeholder="email" type="text"  onChange={(e)=> setEmail(e.target.value)} id="email" class="floatLabel" value={email} name="email"/></label>
    </div>       
    <div class="controls">
    
      <label for="phone"><input placeholder="phone" type="tel" id="phone" onChange={(e)=> setphone(e.target.value)}  class="floatLabel" value={phone} name="phone"/></label>
    </div>
      <div class="grid">
        <div class="col-2-3">
          <div class="controls">
      
           <label for="CNIC"><input  placeholder="CNIC" type="CNIC" id="CNIC" onChange={(e)=> setCNIC(e.target.value)} class="floatLabel " value={CNIC}  name="CNIC"/></label>
          </div>          
        </div>
        <div class="col-1-3">
          <div class="controls">

            <label for="Address">  <input placeholder="address" type="address" onChange={(e)=> setaddress(e.target.value)} id="address" value={address}  class="floatLabel" name="address"/></label>
          </div>          
        </div>
      </div>
      <div class="grid">
        <div class="col-2-3">
          <div class="controls">
         
            <label for="city">  <input placeholder="city" type="text" id="city" onChange={(e)=> setcity(e.target.value)} class="floatLabel" value={city} name="city"/></label>
          </div>         
        </div>
        <div class="col-1-3">
          <div class="controls">
       
            <label for="password"><input placeholder=" password" type="password" onChange={(e)=> setPassword(e.target.value)} id="password" value={password} class="floatLabel" name="password"/></label>
          </div>         
        </div>
      </div>
      <div class="controls">
        <label for="country"> <input  placeholder="country" type="text" id="country" onChange={(e)=> setcountry(e.target.value)}  value={country}  class="floatLabel" name="country"/></label>
      </div>
  </div>
  <button onClick={submitData} type="submit" value="Submit" class="col-1-4"className="login__signInButton">Submit</button>
  </div>
  <div  className="login">
<div className="login__container">
  <div class="form-group">
    <h2 class="heading">Details</h2>
    <div class="grid">
    <div class="col-1-4 col-1-4-sm">
    <div class="controls">
        <label for="hotelname"> <input  placeholder= "YOUR HOTEL NAME" type="text" id="hotelname" onChange={(e)=> sethotelname(e.target.value)} value={hotelname}  class="floatLabel" name="hotelname"/></label>
      </div>
      <div class="controls">
       
        <label for="arrive" class="label-date"> <input type="date" id="arrive" class="floatLabel" name="arrive" />Arrive</label>
      </div>      
    </div>
    <div class="col-1-4 col-1-4-sm">
      <div class="controls">
   <label for="depart" class="label-date" ><input type="date" id="depart" class="floatLabel" name="depart"  />Depart</label>
      </div>      
    </div>
      </div>
      <div class="grid">
    <div class="col-1-3 col-1-3-sm">
      <div class="controls">
        <i class="fa fa-sort"></i>
        <select class="floatLabel">
          <option value="blank"></option>
          <option value="1">1</option>
          <option value="2" selected>2</option>
          <option value="3">3</option>
        </select>
        <label for="fruit"><i class="fa fa-male"></i>&nbsp;&nbsp;People</label>
      </div>      
    </div>
    <div class="col-1-3 col-1-3-sm">
    <div class="controls">
      <i class="fa fa-sort"></i>
      <select class="floatLabel">
        <option value="blank"></option>
        <option value="deluxe" selected>With Bathroom</option>
        <option value="Zuri-zimmer">Without Bathroom</option>
      </select>
      <label for="fruit">Room</label>
     </div>     
    </div>

    <div class="col-1-3 col-1-3-sm">
    <div class="controls">
      <i class="fa fa-sort"></i>
      <select class="floatLabel">
        <option value="blank"></option>
        <option value="single-bed">Zweibett</option>
        <option value="double-bed" selected>Doppelbett</option>
      </select>
      <label for="fruit">Bedding</label>
     </div>     
    </div>
      
     </div>
      <div class="grid">
        <p class="info-text">Please describe your needs e.g. Extra beds, children's cots</p>
        <div class="controls">
          <textarea name="comments" class="floatLabel" id="comments"></textarea>
          <label for="comments">Comments</label>
          </div>
            <button onClick={handleSubmit }type="submit" value="Submit" class="col-1-4"className="login__signInButton">Submit</button>
      </div>
      </div> 
      </div> 
  </div> 
</form>
    )
};
 export default Booking;