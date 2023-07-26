import React, { useState } from "react";
import signupimage from "../../signup-image.jpg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./signup.css";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import useNavigate from "react-router-dom";
>>>>>>> 09f4249ea7ba5dca129ee332afda25eae1506f13
export default function SignUp() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
<<<<<<< HEAD
    const navigate = useNavigate();
    const handleSignUp = () => {
        if (validate(name,mobile,email,password)) {
            const user = {
                name: name,
                mobileNo: mobile,
                emailID: email,
                password: password
            }
            fetch(`${process.env.REACT_APP_BASE_URL}/users`,{
                method:'GET'
            }).then((res)=>res.json()).then((data)=>{
                if(data.find((el)=>el.emailID===email)){
                    alert('User Already Registred Please Sign In!');
                }else{
                    
                    fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(user)
                    }).then((res) => res.json()).then((data) => {
                        alert('User Registered Successfully');
                        navigate("/signin");
                    });
                }
            });
        }
=======
    const navigate=useNavigate();
    const handleSignUp=()=>{
        const user={
            name:name,
            mobileNo:mobile,
            emailID:email,
            password:password
        }
        fetch(`${process.env.REACT_APP_BASE_URL}/users`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        }).then((res)=>res.json()).then((data)=>{
            alert('User Registered Successfully');
            navigate("/signin");
        })
>>>>>>> 09f4249ea7ba5dca129ee332afda25eae1506f13
    }
    return (
        <div className="signup_div">
            <h1>Register</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No." onChange={(e) => setMobile(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="remember me" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => handleSignUp()}>
                    Submit
                </Button>
                <img src={signupimage} alt="error" />
            </Form>
        </div>
    )
}
<<<<<<< HEAD

function validate(name,mobile,email,password) {
    if (name === "") {
        alert("name cannot be null")
        return false
    }
    if (mobile === "") {
        alert("mobile no. cannot be null")
        return false
    }
    if (email === "") {
        alert("email cannot be null")
        return false
    }
    if (password === "") {
        alert("password cannot be null")
        return false
    }
    if (mobile.length !== 10) {
        alert("please enter a valid mobile no.")
        return false
    }
    if (isNaN(mobile)) {
        alert("please enter a valid mobile no.")
        return false
    }
    if (password.length < 8) {
        alert("Password length should be atleast 8 characters long")
        return false
    }
    // if (re_password !== password) {
    //     alert('Confirm Password does not match with the entered value.');
    //     return false
    // }
    if (checkUpperChar(password)) {
        alert("Password must have atleast one upppercase letter")
        return false
    }
    if (checkSpecialChar(password)) {
        alert("Password must have atleast one special character")
        return false
    }
    let at = email.indexOf("@")
    let dot = email.lastIndexOf(".")
    let len = email.length
    if (dot === len - 1 || at === len - 1 || dot < at) {
        alert("please enter a valid email address")
        return false
    }
    return true
}

function checkUpperChar(password) {
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')
            return false
    }
    return true
}

function checkSpecialChar(password) {
    const spchar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i)
        if (spchar.test(char))
            return false
    }
    return true
}
=======
>>>>>>> 09f4249ea7ba5dca129ee332afda25eae1506f13
