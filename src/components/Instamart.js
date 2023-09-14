import { useState } from "react";
const Section=({data,title})=>{
    const [Section,setSection]=useState("about")
    const [isVisible,setisVisible]=useState(false)
return(
    <>
    <div className="border border-black p-2 m-3">
        <h1 className="font-semibold text-xl">{title}</h1>
       {isVisible?
        (
        <>
        <button className="underline" onClick={()=>{setisVisible(false)}}>Hide</button>
        <h1>{data}</h1>
        </>
        ):
       (<button className="underline" onClick={()=>{setisVisible(true)}}>Show</button>)} 
    </div>
    </>
)
}

const Instamart=()=>{
    return(
        <>
        <h1 className="text-3xl font-bold p-4">Instamart</h1>
        <div className="">
        <Section title={"About"} data={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
        <Section title={"Team"} data={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
        <Section title={"Carrers"} data={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
        </div>
        </>
    )
}
export default Instamart;