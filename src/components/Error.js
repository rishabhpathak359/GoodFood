import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div className="err">
            <h1>Error!{err?.status}:{err?.statusText}</h1>
            {/* <h3>{err.error.message}</h3> */}
        </div>
    );
};
export default Error;