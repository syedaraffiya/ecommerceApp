import React from "react";
import { useNavigate } from "react-router-dom";
import"./login.css"

function Booking(){
    const navigate = useNavigate()
    

    const handleSubmit  = (event) => {
        event.preventDefault();
        alert('Booking confirm and Pay Your Bill Please ')
      }
    

    return(
        <form action="">

  <div className="login">
      <div className="login__container">
    <h2 class="heading">Booking & contact</h2>
    <div class="controls">
      
      <label for="name">  <input placeholder="name"type="text" id="name" class="floatLabel" name="name"/></label>
    </div>
    <div class="controls">
   
      <label for="email"><input placeholder="email" type="text" id="email" class="floatLabel" name="email"/></label>
    </div>       
    <div class="controls">
    
      <label for="phone"><input placeholder="phone" type="tel" id="phone" class="floatLabel" name="phone"/></label>
    </div>
      <div class="grid">
        <div class="col-2-3">
          <div class="controls">
      
           <label for="street"><input  placeholder="street" type="text" id="street" class="floatLabel" name="street"/></label>
          </div>          
        </div>
        <div class="col-1-3">
          <div class="controls">

            <label for="street-number">  <input placeholder="number" type="number" id="street-number" class="floatLabel" name="street-number"/></label>
          </div>          
        </div>
      </div>
      <div class="grid">
        <div class="col-2-3">
          <div class="controls">
         
            <label for="city">  <input placeholder="city" type="text" id="city" class="floatLabel" name="city"/></label>
          </div>         
        </div>
        <div class="col-1-3">
          <div class="controls">
       
            <label for="post-code"><input placeholder="post Code" type="text" id="post-code" class="floatLabel" name="post-code"/></label>
          </div>         
        </div>
      </div>
      <div class="controls">
        <label for="country"> <input  placeholder="country" type="text" id="country" class="floatLabel" name="country"/></label>
      </div>
  </div>
  </div>
  <div  className="login">
<div className="login__container">
  <div class="form-group">
    <h2 class="heading">Details</h2>
    <div class="grid">
    <div class="col-1-4 col-1-4-sm">
   
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
}
 export default  Booking;