import React from "react";
import Profile from "./Profile";
class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor")
        this.state={
           count:1,
           count1:2,
        }
        this.interval=null;
    }
    // state={
    //     count:1,
    //     count1:2,
    // }
    componentDidMount(){
        this.interval=setInterval(()=>{
            console.log("Compodidmou")
        },1000)
        // console.log("Compodidmou")
      };
      componentDidUpdate(){
        console.log("CompoDidUp")
      }
      componentWillUnmount(){
        clearInterval(this.interval)
        console.log("Unmount")
      }
    render(){
        console.log("render")
        return(
            <>
        <h1>This is Profile Class component:{this.props.name} {this.state.count} {this.state.count1} </h1>
        <Profile name={"First Child"}/>
        <Profile name={"Second Child"}/>
        <button onClick={()=>{this.setState({
            count:2,
            count1:1
        })}}>Button </button>
        </>
        );
    }
}
export default ProfileClass;