import React from "react";
import "./signup.css";
import { Password } from "./password";
import { FloatingLabel } from "./label";
import { MyButton } from "./button";

export default function SignUp() {
    return (
        <div>
            <div id="parent_div">
                <h1>Register</h1><br />
                <FloatingLabel title={"First Name"} />
                <FloatingLabel title={"Last Name"} />
                <FloatingLabel title={"Contact No."} />
                <FloatingLabel title={"Email"} />
                <Password />
                <MyButton />
            </div>
        </div>
    )
}