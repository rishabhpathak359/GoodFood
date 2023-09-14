export const Shimmer=()=>{
    return(
        <>
        <div className="grid grid-cols-3 gap-3 px-36 py-6">
            {
                Array(9).fill("").map((e,index)=>{
                 return <div className="w-80 h-80 bg-gray-200" key={index}></div>
            })
            }
            </div>
        </>
    );
}