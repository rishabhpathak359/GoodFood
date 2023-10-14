import { useState,useEffect} from "react";
import { Shimmer } from "./Shimmer";
import { filterData } from "../utils/filterdata";
import RestaurantCard from "./RestaurantCard";
import { useIsOnline } from "../utils/useIsOnline";
const Search=({res,setrestaurant,newres})=>{
    const[SearchText,setSearchText]=useState("");
    return(
        <>
        <input type="text" placeholder="Search" className="border-2 px-2"value={SearchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="px-2 bg-orange-300 rounded-md shadow-md text-md hover:bg-orange-800 hover:scale-110" onClick={ ()=>{
            const data= filterData(newres,SearchText);//passing the whole restaurant list everytime  //note that now filterData can be used as a hook!!
            setrestaurant(data);//but making change in only res not newres!!
        }}>
            Search
            </button>
        </>
    );
}
 export const Body=()=>{
    //Making two copies because the filterdata should always recieve the whole restaurant list(newres)to filter and other one to accept changes as filtered out data
    const [res,setrestaurant]=useState([]) ;
    const [newres,newsetrestaurant]=useState([]) ;
    const [isLogged,setisLogged]=useState(false) ;
    const isOnline=useIsOnline();
    useEffect(()=>{
        if(isOnline&&isLogged){
        newdata();
        }
    },[isLogged])
    
     async function newdata(){
    let p= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8073893&lng=80.91489779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json= await p.json();
    console.log(json)
    setrestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    newsetrestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(json?.data)
}
if(!isOnline){
    return(
        <h1>🔴 Oops!! Seems Like you're Offline</h1>
    )
}
return(
    <>
        {!isLogged ? (
            <div className="py-7 px-4 space-x-2">
                {/* Login form */}
                <input type="text" className="border-2 px-2" placeholder="Username" />
                <input type="password" className="border-2 px-2"  placeholder="Password" />
                <button className="px-2 bg-orange-300 rounded-md shadow-md text-md hover:bg-orange-800 hover:scale-110" onClick={() => setisLogged(true)}>
                    Login
                </button>
            </div>
        ) : (
            <>
                <div className="p-6 space-x-2">
                    <Search res={res} setrestaurant={setrestaurant} newres={newres}/>
                </div>

                <div className="flex flex-wrap space-x-2 space-y-3 px-24 py-2">
                    {res?.length === 0 ? <Shimmer /> :
                        res?.map(restaurant => (
                            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                        ))
                    }
                </div>
            </>
        )}
    </>
);
};
