import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log("Fetched Menu Data: ", json); 
      setMenu(json);
    } catch (error) {
      console.log("Error while fetching the MENU_API:: ", error);
    }
  };

  return menu;
};