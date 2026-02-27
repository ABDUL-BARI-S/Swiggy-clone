// import { Link } from "react-router-dom";
export const RestaurantCard = ({list}) => {
    return (
        // <Link to = {`/restaurants/${list.info.id}`} style={{textDecoration:"none", color:"black"}}>
   <div className="res-card">
    <div className="card">
        <img className="res-img"  src= {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${list?.info?.cloudinaryImageId}`} alt={list?.info?.name}  />
         <h3>{list?.info?.name}</h3>
         <h5>Cuisine: {list?.info?.cuisines?.join(', ')}</h5>
         <h5>📍 {list?.info?.locality}</h5>
         <h5>⭐Rating: {list?.info?.avgRating} | ⏱️{list?.info?.sla?.deliveryTime} minute</h5>
         <h5>{list?.info?.costForTwo}</h5>
         
    </div>
    </div>

    // </Link>
   
    
);
}