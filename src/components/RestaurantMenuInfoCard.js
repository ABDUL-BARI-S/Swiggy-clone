export const RestaurantMenuInfoCard = ({menu}) =>
{
const {name, avgRatingString, totalRatingsString, cuisines} = menu?.data?.cards[2]?.card?.card?.info || {};
    return (
        <div className="rest-menu">
            <h1>{name}</h1>
            <p>🌟 {avgRatingString} ({totalRatingsString}) </p>
            <p> Cusines: {cuisines?.join(", ")}</p>
        </div>
    )
}

