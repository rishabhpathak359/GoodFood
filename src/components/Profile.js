import { useEffect, useState } from "react";
import React from "react";
// const Profile=({name})=>{
//     const[x,y]=useState("1F")
//     useEffect(()=>{
//         // console.log("Effect")
//     },[x])
//     return(
//         <>
//         <h1>This is a profile Component:{name} {x}</h1>
//         <button onClick={()=>{
//             y("2F")
//         }}>Button </button>
//         </>
//     );
// }
class Profile extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name+ "Constructor")
        this.state={
           count:1,
           count1:2,
        }
    }
    componentDidMount(){
        console.log(this.props.name+ "mount")
    }
    componentDidUpdate(){
        console.log(this.props.name+ "update")     
    }
    render(){
        console.log(this.props.name+"render")
        return(
            <>
        <h1>This is Child component:{this.props.name} {this.state.count} {this.state.count1} </h1>
        <button onClick={()=>{this.setState({
            count:2,
            count1:1
        })}}>{this.props.name}Button </button>
        </>
        );
    }
}
export default Profile;
//constructor render Fchildconst Fchild render Schildconst Schild render Fchildmount Schildmount componentdidm
