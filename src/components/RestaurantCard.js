import React from "react";
import { Link } from "react-router-dom";
//passing the restraunt id here and then passing it after "/restaurant/" and then using useParams() accepting this id from our main app.js (remeber there we configured in to pass dynamic id so this id is recieved by use params and then we add this to our url to fetch data of particular restaurant)
const RestaurantCard=({name,cuisines,cloudinaryImageId,avgRating,id})=>{
    return(
        <>
        <div className="border-2 shadow-md p-2 w-80 hover:scale-95"><Link to={"/restaurant/"+id}>
            <img className="w-64"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h2 className="text-lg">{name}</h2>
            <h3 className="text-xs">{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>
            </Link>
        </div> 
        </>
    )
};
export default RestaurantCard;