import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from "react-router-dom"

class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			logged:false,
			x:true,
			y:false
		}
		this.onClick = this.onClick.bind(this);
		this.onClick1 = this.onClick1.bind(this);
	}
	componentDidMount(){
    setInterval(()=>{
      this.setState({logged:localStorage["logged"]}) },500)
  }
	onClick(){
		localStorage.setItem("logged",false)
	}

	onClick1(){
		localStorage.setItem("logged",true)
	}
	render(){
//!this.state.logged
		if (localStorage.getItem("logged") === "false"){
            return <Redirect to="/sign-in" />;
		}
		return(
			<div>

				<div>Profile</div><br/>
				
				
			</div>
			)
	}
}
export default Profile;