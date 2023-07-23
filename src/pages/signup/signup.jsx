import React, { useState } from "react";
import signupimage from "../../signup-image.jpg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./signup.css";
export default function SignUp() {
    const [name,setName]=useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        })
    }
    return (
        <div className="signup_div">
            <h1>Register</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No." onChange={(e)=>setMobile(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="remember me" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={()=>handleSignUp()}>
                    Submit
                </Button>
                <img src={signupimage} alt="error"/>
            </Form>
        </div>
    )
}