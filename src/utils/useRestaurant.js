import { useState,useEffect } from "react";
export const useRestaurant=(resID)=>{
    const [restaurantname,setrestaurantname]=useState();
    useEffect(()=>{
        newdata();
    },[])
    async function newdata(){
        const url=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8073893&lng=80.91489779999999&restaurantId=${resID.id}&catalog_qa=undefined&submitAction=ENTER`
       const restaurantdetail=await fetch(url)
    const data1=await restaurantdetail.json();
    console.log(data1)
    setrestaurantname(data1);
    };
    return restaurantname;
}
