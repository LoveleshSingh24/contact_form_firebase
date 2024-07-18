import React, { useState } from 'react';
import "./style.css";

function Reactcontact() {
    
    const[user,setUser]=useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    let name ,value;
    const getUserData= (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name] : value});//appending to previous data 
    };

    const postData = async (e) => {
        e.preventDefault("");
        const {name,email,phone,address ,message}=user;

        if(name && email && phone && address && message){

            const res =await fetch("https://reactcontactform-b6bd8-default-rtdb.firebaseio.com/myDbForm.json",{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({
                        name,
                        email,
                        phone,
                        address,
                        message,

                    })
                }
            );

        //adding response
            if(res){
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    message: "",
                });
                
                //alert
                alert("Data Stored Succesfully !!")
            }

        }
        else{
            alert("Please Fill All The Data")
        }
    };
    
  return (
    <>
        <div className="container">  
            <form id="contact" action="" method="POST">
                <h3>Colorlib Contact Form</h3>
                <h4>Contact us for custom quote</h4>
                <fieldset>
                    <input placeholder="Your name" 
                    value={user.name}
                    onChange={getUserData}
                    type="text"
                    name='name'
                    tabIndex="1" 
                    autoComplete='off'
                    required autoFocus/>
                </fieldset>
                <fieldset>
                    <input placeholder="Your Email Address" 
                    value={user.email}
                    onChange={getUserData}
                    type="email" 
                    name="email"
                    tabIndex="2" 
                    required
                    />
                </fieldset>
                <fieldset>
                    <input placeholder="Your Phone Number" 
                    value={user.phone}
                    onChange={getUserData}
                    type="tel"
                    name="phone"
                    tabIndex="3" 
                    required
                    />
                </fieldset>
                <fieldset>
                    <input placeholder="Address" 
                    value={user.address}
                    onChange={getUserData}
                    type="text"
                    name="address" 
                    tabIndex="4" 
                    required
                    />
                </fieldset>
                <fieldset>
                    <textarea 
                        placeholder="Type your message here...." 
                        typeof="text"
                        name="message"
                        value={user.message}
                        onChange={getUserData}
                        tabIndex="5" 
                        required>
                    </textarea>
                </fieldset>
                <fieldset>
                    <button
                        onClick={postData} 
                        name="submit" 
                        type="submit" 
                        id="contact-submit" 
                        data-submit="...Sending">
                        Submit
                    </button>
                </fieldset>
                <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
            </form>
        </div>
    </>
  );
};

export default Reactcontact;
