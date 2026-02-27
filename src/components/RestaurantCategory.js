import{ MenuItem }from "./MenuItem";
// import { useState } from "react";

export const RestaurantCategory = ({category,setIndex, showItems}) => {
    // const [showItems, setShowItems] = useState(false);
// console.log("cat Data", category);

    const handleClick  = () => {
        setIndex();

    };
    return(
        <div className="cat-accordian">
            {/* Header */}
            <div className="cat-header" onClick={handleClick}>
                <span>
                    {category?.title} ({category?.itemCards?.length })
                    </span> {""}
                    {/* {" "}  */}
                    <span>{showItems ? "🢃" : "🢁"}</span>
                    </div>

                    {/* Accordian Body */}
                    {showItems && (
                        <div className="item-wrapper">
                            {category.itemCards.map((itemCard) => {
                                return (
                                    <MenuItem key= {itemCard?.card?.info?.id }
                                    menuItem= {itemCard?.card?.info} />
                                );
                            })}
                            </div>
                    )}
        </div>
    );
    
};