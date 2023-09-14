import { useState } from "react";
import { Link } from "react-router-dom";
import { useIsOnline } from "../utils/useIsOnline";
import { useSelector } from "react-redux";
const Title=()=>(
    <Link to="/">
        <img className="h-28"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&usqp=CAU"/>
    </Link>  
          
);
 export const Header=()=>{
    const cartItems=useSelector(store=>store.cart.items)
    // console.log(cartItems[0].id)
    const online=useIsOnline();
    const[key,newkey]=useState(false);
    return(
        <>
        <div className="flex justify-between p-3 bg-yellow-200 shadow-xl">
            <Title/>
    <div>
    <ul className="flex py-10">
        <li className="px-4 hover:text-orange-600 font-semibold"><Link to="/">Home</Link></li>
        <li className="px-4 hover:text-orange-600 font-semibold"><Link to="/about">About Us</Link></li>
        <li className="px-4 hover:text-orange-600 font-semibold"><Link to="/contact">Contact</Link></li>
        <li className="px-4 hover:text-orange-600 font-semibold"><Link to="/instamart">Instamart</Link></li>
        <li className="px-4 hover:text-orange-600 font-semibold"><Link to="/cart">Cart-{cartItems.length}</Link></li>
        <li className="px-4">{online? "🟢":"🔴"}</li>
    </ul>
</div>
{key?(<button  onClick={()=>{{newkey(false)}}}>Logout</button>)
        :
        <button  onClick={()=>{{newkey(true)}}}>Login</button>}
</div>
</>);    
};
