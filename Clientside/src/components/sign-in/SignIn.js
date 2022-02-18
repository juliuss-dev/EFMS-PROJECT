import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import {useHistory} from "react-router-dom"
function SignIn() {
    const history = useHistory()
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

    const addLogin = () =>{
        const data = {username: username, password:password}
        Axios.post("http://localhost:4001/login", data).then((response) =>{
            // alert(response.data)
            // console.log(data)
            
            if(response.data.error){
                alert(response.data.error);
                console.log(response.data.error)
            } 
            else{
                alert("Login Successfully")
                history.push("/user")
            }
        })
    }

        
        // history.push('/user')
        // if(username != username.username){
        //     console.log("cannot login")
        //     alert("cannot login incorrect username")
        // }
       
        // if(password != password.password){
        //     console.log("cannot login")
        //     alert("cannot login incorrect password")
        // }
        // else{
        //     console.log("Login na")
        // }
        // console.log(username,password);
    
    
    return (
        <div className="main-sign-in">
            <div className="main-sign-in-form">
                {/* <h1 className="main-sign-in-h1">
                    University of Nueva Caceres Event
                </h1>
                <h2 className="main-sign-in-h2">
                    Facility Management System
                </h2> */}
                <form className="main-form">
                    <h1 className="select-h1">Login As</h1>
                    <select className="select-option" name="" id="">
                        <option value="user">User</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="vpa">VPA Office</option>
                        <option value="imc">IMC Department</option>
                        <option value="ict">ICT Department</option>
                        <option value="main-approval">Approval Department</option>

                    </select>
                    <label>Username</label>
                    <input type="text" onChange={(event) =>{
                        SetUsername(event.target.value)
                    }} placeholder="Enter your username" required />
                    <label>Password</label>
                    <input type="password" onChange={(event) =>{
                        SetPassword(event.target.value)
                    }} placeholder="Enter your password" required />
                   <button className="main-sign-in-button" onClick={addLogin}>Sign In</button>
                </form>
            </div>
            <img className="main-sign-in-logo" src="./img/UNC_LOGO.png" alt=""/>
        </div>
    )
}

export default SignIn
