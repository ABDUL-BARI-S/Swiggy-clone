import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {useOnlineStatus} from "../utils/useOnlineStatus";
import {UserContext} from "../utils/userContext";
import {HotelListContext} from "../utils/HotelListContext";
import { logo } from "../utils/mockData";

export const Header = () => {
    const isOnline = useOnlineStatus();
    const [input, setInput] = useState("");
    const {name} = useContext(UserContext);
    const {hotelList, setHotelList, filteredHotelList, setFilteredHotelList} = useContext(HotelListContext);
    
    return (
        <div className="header" >
            <Link to={"/"}>
         <img  className="logo" 
        src= {logo} alt="logo"/>
        </Link>

<input  className = "search-bar"
         type="text" 
          placeholder="Search for restaurant, item or more..." value={input} 
                onChange={(e) => { 
                    e.preventDefault();
                    setInput(e.target.value);
                    const filteredList = hotelList.filter((hotel) => 
                    hotel.info.name.toLowerCase().includes(e.target.value.toLowerCase()),
                    );  
                    setFilteredHotelList(filteredList); }} />


<div className="nav-status" >
 {
                    isOnline ? (
                        <li className="nav-item" style={{ color: "green" }}>🟢 Online</li>
                    ) : (
                        <li className="nav-item" style={{ color: "red" }}>🔴 Offline</li>
                    )
                }
                <div/>
               
               
         <nav>
                <ul className="nav-bar">
           
         <Link to="/"  className="nav-item"><li><b>Home</b></li></Link> 
             <Link to="/about" className="nav-item"><li ><b>About</b></li></Link> 
            <Link to="/contact"  className="nav-item"> <li ><b>Contact Us</b></li></Link> 
            <Link to="/cart" className="nav-item"> <li ><b>Cart</b></li></Link> 
         </ul>
         </nav>
           
             <div/>
        </div>
        </div>
        );
    };
