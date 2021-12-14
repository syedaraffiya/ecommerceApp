import Product from "./product";
import React from "react";
import"./home.css";
import   SearchAppBar  from './navbar';
import Footer from "./footer"
//  import Navlinks from "./Navlinks";

 function Home(){
   


    // const [userLogin, setUserLogin] = useState(false);
    // const [loader, setLoader] = useState(false);
    // const [userList, setUserList] = useState([]);
    // const [userData, setUserData] = useState({});
    // const location = useLocation();
    // const Navigation = useNavigate();
  
    // const logout = () => {
    //   signOut(auth)
    //     .then(() => {
    //       console.log("Sign out");
    //       Navigation("/login");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // const getData = () => {
    //   let refrence = ref(db, "users/");
    //   let arr = [];
    //   onChildAdded(refrence, (snapshot) => {
    //     if (snapshot.exists()) {
    //       arr.push(snapshot.val());
    //       setUserList([...arr]);
    //     }
    //   });
    // };
    // const deleteUser = (id) => {
    //   const refrence = ref(db, "users/" + id);
    //   remove(refrence);
    // };
    // useEffect(() => {
    //   setLoader(true);
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       const uid = user.uid;
    //       console.log(uid);
    //       setEmail(true);
    //       setLoader(false);
    //       setUserData(location.state);
    //       getData();
    //     } else {
    //       Navigation("/checkout");
    //     }
    //   });
    // }, []);






     return(
        
         <div className="home">
          <SearchAppBar  />
           {/* <Navlinks />  */}
         

<img className="home__image" src="https://blog.msourceideas.com/hubfs/Imported_Blog_Media/thought-catalog-wyEinDRV88I-unsplash-scaled.jpg"/>





        <div className="home__row">
            <Product
            id="123"
            title="FiveStarHotel"
             
            rating={9} 
            image="https://www.nicepng.com/png/full/360-3608185_related-wallpapers-ghatshila-hotel-river-view.png"/>
           

           <Product
            id="123"
            title="4Star Hotel"
          
            rating={5} 
            image="https://foto.hrsstatic.com/fotos/0/3/545/350/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F7%2F8%2F7%2F9%2F787912%2F787912_a_16952410.jpg/FReyGOXj7%2F7TPS%2F%2ByhIQig%3D%3D/520,346/6/THE_STANLEY_HOTEL_AND_SUITES-Port_Moresby-Aussenansicht-2-787912.jpg"/>

            <Product
            id="123"
            title="Star Hotel"
         rating={5} 
            image="https://pix10.agoda.net/hotelImages/8546401/0/23ec4a99e046fa3ebe94743b50dd19f0.jpg?ca=9&ce=1&s=1024x768"/>




       
        </div>

        
        <div className="home__row">

        <Product
            id="123"
            title="Hotel"
          rating={5} 
            image="https://exp.cdn-hotels.com/hotels/2000000/1400000/1395300/1395252/421ce44c_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"/>



            <Product
            id="123"
            title="Hotel"
             rating={5} 
            image="https://www.kenyasafari.com/images/sarova-stanley-heated-outdoor-pool-590x390.jpg"/>
           

           <Product
            id="123"
            title="ABC Hotel"
           rating={5} 
            image="https://www.orissapost.com/wp-content/uploads/2019/10/Hotel.png"/>

            <Product
            id="123"
            title="PC Hotel"
         rating={5} 
            image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>




       
        </div>

        
       
        <div className="home__row">
         
           <Product
            id="123"
            title="Star Hotel"
             rating={5} 
            image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>

            <Product
            id="123"
            title="4 Star Hotel"
            rating={5} 
            image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>



    
       
        </div>
   
       
            <Footer />
     
        
         </div>
         
     )
 }
 export default Home;
           

