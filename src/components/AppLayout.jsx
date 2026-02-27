import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {Footer}from "./Footer";
// import {UserContext} from "./UserContext";
import { useState } from "react";
import { HotelListContext } from "../utils/HotelListContext";



export const Applayout = () => {
    const [hotelList, setHotelList] = useState([]);
  const [filteredHotelList, setFilteredHotelList] = useState([]);
    return <div>
        <HotelListContext.Provider value={{hotelList, setHotelList, filteredHotelList, setFilteredHotelList}}>
        <Header/>
        <Outlet/>
        <Footer/>
        </HotelListContext.Provider>
    </div>  
};