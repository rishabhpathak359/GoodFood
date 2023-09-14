//passing the restraunt id here and then passing it after "/restaurant/" and then using useParams() accepting this id from our main app.js (remeber there we configured in to pass dynamic id so this id is recieved by use params and then we add this to our url to fetch data of particular restaurant)
const FoodItems=({name,category,imageId,price})=>{
    return(
        <>
        <div className="border-2 shadow-md p-2 w-80 hover:scale-95">
            <img className="w-64"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId} />
            <h2 className="text-lg">{name}</h2>
            <h3 className="text-xs">{category}</h3>
            <h4>Rs{price/100}/-</h4>
        </div> 
        </>
    )
};
export default FoodItems;