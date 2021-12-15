import React from "react";
import { useNavigate } from "react-router-dom";

import"./detail.css";

function Details() {

    const navigate = useNavigate() 

    const handleSubmit  = (event) => {
        event.preventDefault();
        navigate("/booking")
        alert('Booking page ')
      }
  
  return (
    <div >
      <div class="container ">
         <div class="row align-items-center my-5">
          <div class="col-lg-7">
         
    
          <div className="detail"  > 
         
        
            <h1 class="font-weight-light">Five Star Hotel Details</h1>
            <p>
           
           <h3> Hotel Facilities:</h3> 
        
           1: Banquet facilities.
        2: Computer facility.
         3:  Conference and meeting facilities.
           4:  Disabled room.
           5: Fitness room.
          6: Health club.
          7: Sauna and steam bath.
            </p>
            <h1> Rating: 9 Star</h1>
            <h3>* * * * * * * * * </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
    <ul>
        <li>One Room Per Day Charges Rs :15,000</li>
        <li>Two Room Per Day Charges Rs :25,000</li>
        <li>Three Room Per Day Charges Rs :35,000</li>
    </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>
</div> 
<div>
    
<div className="detail"  > 
         
     
         <h1 class="font-weight-light">Park Lane Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
        1: Banquet facilities.
     2: Computer facility.
      3:  Conference and meeting facilities.
        4:  Disabled room.
        5: Fitness room.
       6: Health club.
       7: Sauna and steam bath.
         </p>
         <h1> Rating: 8 Star</h1>
         <h3>* * * * * * * *  </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :15,000</li>
     <li>Two Room Per Day Charges Rs :25,000</li>
     <li>Three Room Per Day Charges Rs :35,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>
</div>


<div className="detail"  > 
         
     
         <h1 class="font-weight-light">Royal Mount Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
       1: Banquet facilities.
       2: Computer facility.
       3:  Conference and meeting facilities.
       4:  Disabled room.
       5: Fitness room.
       6: Health club.
       7: Sauna and steam bath.
         </p>
         <h1> Rating: 9 Star</h1>
         <h3>* * * * * * * * * </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :1o,000</li>
     <li>Two Room Per Day Charges Rs :20,000</li>
     <li>Three Room Per Day Charges Rs :30,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>
</div>
       


<div className="detail"  > 
         
     
         <h1 class="font-weight-light">Hilton Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
       1: Banquet facilities.
       2: Computer facility.
       3:  Conference and meeting facilities.
       4:  Disabled room.
       5: Fitness room.
     
         </p>
         <h1> Rating: 7 Star</h1>
         <h3>* * * * * * *  </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :18,000</li>
     <li>Two Room Per Day Charges Rs :26,000</li>
     <li>Three Room Per Day Charges Rs :40,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>



<div className="detail"  > 
         
     
         <h1 class="font-weight-light">Mexi Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
       1: Banquet facilities.
      
       2:  Conference and meeting facilities.
       
       3: Fitness room.
       4: Health club.
       5: Sauna and steam bath.
         </p>
         <h1> Rating: 9 Star</h1>
         <h3>* * * * * * * * * </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :8,000</li>
     <li>Two Room Per Day Charges Rs :15,000</li>
     <li>Three Room Per Day Charges Rs :22,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>



<div className="detail"  > 
         
     
         <h1 class="font-weight-light">Even Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
      
      
       1:  Conference and meeting facilities.
     
       2: Fitness room.
       3: Health club.
       4: Sauna and steam bath.
         </p>
         <h1> Rating: 8 Star</h1>
         <h3>* * * * * * * * </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :7,000</li>
     <li>Two Room Per Day Charges Rs :12,000</li>
     <li>Three Room Per Day Charges Rs :20,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>



<div className="detail"  > 
         
     
         <h1 class="font-weight-light">PC Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
       1: Banquet facilities.
       2: Computer facility.
       3:  Conference and meeting facilities.
       4:  Disabled room.
       5: Fitness room.
       6: Health club.
       7: Sauna and steam bath.
         </p>
         <h1> Rating: 10 Star</h1>
         <h3>* * * * * * * * * *</h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :25,000</li>
     <li>Two Room Per Day Charges Rs :40,000</li>
     <li>Three Room Per Day Charges Rs :50,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>


<div className="detail"  > 
         
     
         <h1 class="font-weight-light">SunRise Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
       1: Banquet facilities.
       2: Computer facility.
       3:  Conference and meeting facilities.
       4:  Disabled room.
       5: Fitness room.
       6: Health club.
       7: Sauna and steam bath.
         </p>
         <h1> Rating: 8 Star</h1>
         <h3>* * * * * * * * </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :13,000</li>
     <li>Two Room Per Day Charges Rs :20,000</li>
     <li>Three Room Per Day Charges Rs :30,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>



        <div className="detail" > 
         
     
         <h1 class="font-weight-light">RoadStar Hotel</h1>
         <p>
        
        <h3> Hotel Facilities:</h3> 
     
       1: Banquet facilities.
       2: Computer facility.
       3:  Conference and meeting facilities.
       4:  Disabled room.
       5: Fitness room.
       6: Health club.
       7: Sauna and steam bath.
         </p>
         <h1> Rating: 6 Star</h1>
         <h3>* * * * * * </h3>
<div>
<h2>No OF Rooms</h2>
<h3>
 <ul>
     <li>One Room Per Day Charges Rs :5,000</li>
     <li>Two Room Per Day Charges Rs :10,000</li>
     <li>Three Room Per Day Charges Rs :15,000</li>
 </ul>
</h3>
<button  onClick={handleSubmit} type="submit" value="Submit" class="col-1-4">Booked Now</button>
</div>


</div>

  </div>  
  </div>
 );
  }
  

export default Details;