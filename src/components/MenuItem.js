export const MenuItem = ({ menuItem }) => {
    return (
        <div className="menu-item">
            <div>
            <h1>{menuItem?.name}</h1>
            <p>Price: ₹{menuItem?.price ? menuItem?.price / 100 : menuItem?.defaultPrice / 100}</p>
           <p>
             🌟{menuItem?.ratings?.aggregatedRating?.rating}  ({menuItem?.ratings?.aggregatedRating?.ratingCount})
           </p>

            <p>{menuItem?.description}</p>
        </div>

        <div className="menu-item-image">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_138/${menuItem?.imageId}`} alt={menuItem.name} />
        </div>
       
</div>

       

    );
    
};
