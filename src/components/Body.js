import { useContext, useEffect, useState } from "react";
import {RestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus";
import { RESTAURANT_LIST_API } from "../utils/constants";
import{ HotelListContext} from "../utils/HotelListContext";
import {FilterByRating} from "./FilterByRating";

const Body = () => {
  const { hotelList, setHotelList, filteredHotelList, setFilteredHotelList } =
    useContext(HotelListContext);

  const isOnline = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(RESTAURANT_LIST_API);

      const json = await data.json();

      console.log("Fetched data", json);

      if (json?.data?.cards.length > 11) {
        setHotelList(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
        setFilteredHotelList(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      } else {
        setHotelList(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
        setFilteredHotelList(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
        );
      }
    } catch (error) {
      console.log("Error when fetching data", error);
    }
  }

  

  if (!isOnline) {
    return (
      <div className="body">
        <h1 style={{ padding: "10vh 1.5rem", textAlign: "center" }}>
          🔴 You are offline. Please check your internet connection.
        </h1>
      </div>
    );
  }

  if (!hotelList || hotelList.length === 0) {
    return (
      <div className="body">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <FilterByRating />

      <div className="res-container">
        {filteredHotelList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            <RestaurantCard list={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;