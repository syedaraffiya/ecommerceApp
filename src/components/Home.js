import Product from "./product";
import React from "react";
import"./home.css";
import   SearchAppBar  from './navbar';
import Footer from "./footer"
//  import Navlinks from "./Navlinks";

 function Home(){
     return(
        
         <div className="home">
          <SearchAppBar />
           {/* <Navlinks />  */}
         

<img className="home__image" src="https://images.pexels.com/photos/4062467/pexels-photo-4062467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>


        <div className="home__row">
            <Product
            id="123"
            title="bag"
            price={5000} 
            rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>
           

           <Product
            id="123"
            title="bag"
            price={5000} 
            rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>

            <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>




       
        </div>

        
        <div className="home__row">

        <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>



            <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>
           

           <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>

            <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>




       
        </div>

        
        <div className="home__row">
            <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>
           

           <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>



          <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>
           


       
        </div>

        
        <div className="home__row">
         
           <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>

            <Product
            id="123"
            title="bag"
            price={5000} rating={5} 
            image="https://i.pinimg.com/originals/a1/b7/0c/a1b70c7e2471eac0de8344b8c894f910.jpg"/>



    
       
        </div>
       
            <Footer />
     
        
         </div>
         
     )
 }
 export default Home;
           

