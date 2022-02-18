import React, { useState } from 'react'
import './SignUp.css'
// import { Link } from 'react-router-dom'
import Axios from 'axios'
function SignUp() {
    const [firstname, SetFirstname] = useState("");
    const [middlename, SetMiddlename] = useState("");
    const [lastname, SetLastname] = useState("");
    const [email, SetEmail] = useState("");
    const [birthdate, SetBirthdate] = useState("");
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");

    const addSignUp = () =>{
        Axios.post("http://localhost:4001/signup",{
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            email: email,
            birthdate: birthdate,
            username: username,
            password: password,
            
        })
        console.log(firstname,middlename,lastname,email,birthdate,username,password);
    }
    return (
        <div className="main-sign-up">
            <form className="sign-up-form" autoComplete='off'>
                    <label>Firstname</label>
                    <input type="text" onChange={(event) =>{
                        SetFirstname(event.target.value)
                    }} required />

                    <label>Middlename</label>
                    <input type="text" onChange={(event) =>{
                        SetMiddlename(event.target.value)
                    }}/>

                    <label>Lastname</label>
                    <input type="text" onChange={(event) =>{
                        SetLastname(event.target.value)
                    }} required />

                    <label>Email</label>
                    <input type="email" onChange={(event) =>{
                        SetEmail(event.target.value)
                    }} required />

                    <label>Birthdate</label>
                    <input type="date" onChange={(event) =>{
                        SetBirthdate(event.target.value)
                    }} required />

                    <label>Username</label>
                    <input type="text" onChange={(event) =>{
                        SetUsername(event.target.value)
                    }} required />

                    <label>Password</label>
                    <input type="text" onChange={(event) =>{
                        SetPassword(event.target.value)
                    }} required />
                    
                    <button className="main-sign-up-button" onClick={addSignUp}>Sign Up</button>
                </form>
                    <div className="sign-up-logo">
                    <img className="main-sign-up-logo" src="./img/UNC_LOGO.png" alt=""/>
                    </div>
        </div>
    )
}

export default SignUp
