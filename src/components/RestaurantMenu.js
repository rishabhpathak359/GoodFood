import React from 'react'
import { useParams } from 'react-router-dom'
import { Shimmer } from './Shimmer';
import {useRestaurant} from '../utils/useRestaurant';
import { useSelector,useDispatch } from 'react-redux';
import { additem } from '../utils/cartslice';
const RestaurantMenu = () => {
    const resID=useParams();
  const restaurantname=useRestaurant(resID);
  const dispatch=useDispatch();
  const handleItems=(item)=>{
    // console.log(item)
    // console.log(item.id)
    dispatch(additem(item))
  }
    return restaurantname?(
        <>
       < div className='p-4 flex'>
        <div className='p-5'>
        <img className="w-96" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + restaurantname?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
            <div className='flex justify-between'>
            <h1 className='font-normal text-3xl pt-1'>{restaurantname?.data?.cards[0]?.card?.card?.info?.name}</h1>
            <h3 className='py-2 text-lg pl-3'>{restaurantname?.data?.cards[0]?.card?.card?.info?.avgRating}⭐</h3>
           </div>
            <h3 className='text-lg font-thin'>{restaurantname?.data?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h3>
            <h3 className=''>{restaurantname?.data?.cards[0]?.card?.card?.info?.areaName},{restaurantname?.data?.cards[0]?.card?.card?.info?.city}</h3>
            </div>
            <div className=''>
                <ul>
                {restaurantname?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item)=>(
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} <button className='border rounded-full w-7 bg-gray-400 text-white' onClick={()=>{handleItems(item?.card?.info)}}>+</button></li>
                ))}
                </ul>
            </div>
        </div>
        </>
        
    ):<Shimmer/>
}

export default RestaurantMenu;