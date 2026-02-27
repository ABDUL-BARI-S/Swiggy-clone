import { useState } from "react";
import { useParams } from "react-router-dom";
import {RestaurantMenuInfoCard} from "./RestaurantMenuInfoCard";
import {RestaurantCategory} from "./RestaurantCategory";
import  {useRestaurantMenu}  from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  
   const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);


  // const [menu, setMenu] = useState([]);
  if (!menu || menu.length === 0) {
  return(<h1>Loading....</h1>)
  }
 

  const categories =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      },
    ) || [];
  console.log("categories", categories);

 return (
    <div
      style={{
        paddingLeft: "20px",
        paddingTop: "20px",
        paddingBottom: "50px",
        paddingRight: "20px",
      }}>

        <RestaurantMenuInfoCard menu={menu} />
      <h2>Menu:</h2>
      {/* categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          category={category?.card?.card}
showItems={index === showIndex ? true : false}
          setIndex={() => {
            setShowIndex(index === showIndex ? null : index);
          }}
          

        />
      ))}
    </div>
  );
};


export default RestaurantMenu;