import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import {Body}  from "./components/Body";
import { Footer } from "./components/footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import ProfileClass from "./components/ProfileClass";
import store from "./utils/store";
import { Provider } from "react-redux";
const Instamart=lazy(()=>import("./components/Instamart"))
const AppLayout=()=>{
    return(
        <>
        <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        </Provider>
        </>
    )
};
const approuter=createBrowserRouter(
   [ {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/instamart",
                element:<Suspense><Instamart /></Suspense>,
            },
            {
              path:"/restaurant/:id",
              element:<RestaurantMenu/>
            },
            {
            path:"/about",
            element:<About />,
            children:  [{
                path:"profile",
                element:<ProfileClass />,
            }]
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/cart",
            element:<Cart />
        },
        
    ]
   }]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />); 
